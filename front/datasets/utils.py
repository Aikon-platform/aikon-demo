from django.utils.deconstruct import deconstructible
import os
import uuid
from pathlib import Path
from typing import List, Dict
import requests
from stream_unzip import stream_unzip
import re

from shared.utils import pprint

IMG_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".tiff"}


@deconstructible
class PathAndRename(object):
    """
    This class is used to rename the uploaded files
    """

    def __init__(self, sub_path):
        self.path = sub_path

    def __call__(self, instance, filename):
        ext = filename.split(".")[-1]
        # Generate UUID if not already set (should be rare since UUID is default)
        filename = f"{instance.id or uuid.uuid4()}.{ext}"
        return os.path.join(self.path, filename)


def unzip_on_the_fly(
    zip_url_or_path: str | Path, target_path: str | Path, allowed_extensions=None
) -> List[Path]:
    """
    Unzip an internet file in a streaming fashion

    Ignores hidden files (starting with a dot or in a folder starting with a dot)

    Args:
        zip_url_or_path: The URL of the ZIP file
        target_path: The path where the files are extracted
        allowed_extensions: A list of allowed extensions (default: None)

    Returns:
        A list of all the files extracted
    """
    if isinstance(zip_url_or_path, str) and "://" in zip_url_or_path:

        def zipped_chunks():
            with requests.get(zip_url_or_path, stream=True) as r:
                r.raise_for_status()
                for chunk in r.iter_content(chunk_size=8192):
                    yield chunk

    else:

        def zipped_chunks():
            with open(zip_url_or_path, "rb") as f:
                while True:
                    chunk = f.read(8192)
                    if not chunk:
                        break
                    yield chunk

    target_path = Path(target_path)
    all_files = []

    for file_name, file_size, unzipped_chunks in stream_unzip(zipped_chunks()):
        file_name = file_name.decode("utf-8")
        path = target_path / file_name
        if "/." in "/" + file_name.replace("\\", "/"):  # hidden file
            continue
        if (
            allowed_extensions is not None
            and path.suffix.lower() not in allowed_extensions
        ):
            continue
        all_files.append(path)
        path.parent.mkdir(parents=True, exist_ok=True)
        with open(path, "wb") as f:
            for chunk in unzipped_chunks:
                f.write(chunk)

    return all_files


def sanitize_str(string: str) -> str:
    """
    Sanitize a URL string to make it a valid filename
    (remove http, https, www, /, ., :, spaces)
    """
    return (
        re.sub(r"^https?\:\/\/|www\.|\.|:|%|\s", "", string.strip())
        .replace("/", "^")
        .replace(" ", "_")
    )


class TreeDict:
    """
    a dict representation of a directory tree,
    along with helper functions to convert the tree to HTML

    tree structure:
        {
            curdir  : Str,  # name of the current directory
            files   : List[str],  # list of file names in the current directory
            subdirs : List[TreeDict],  # a list of subdirectories, each represented by a TreeDict
        }
    """

    tree: Dict

    def __init__(self, path: str | os.PathLike, root: bool = False) -> Dict:
        to_abspath = lambda _path, _file: os.path.join(_path, _file)
        to_basename = lambda _path: Path(_path).name

        self.tree = {
            "curdir": to_basename(path) if not root else "root",
            "files": [],
            "subdirs": [],
        }

        if os.path.exists(path):
            for el in sorted(os.listdir(path)):
                el_abspath = to_abspath(path, el)
                if os.path.isfile(el_abspath):
                    self.tree["files"].append(to_basename(el_abspath))
                elif os.path.isdir(el_abspath):
                    self.tree["subdirs"].append(TreeDict(el_abspath))

    def get_folders(self) -> list[str]:
        # get all folders and return them as a list. skip root directory as it falsifies the folder count.
        def inner(acc: list, tree: dict):
            if (curdir := tree.get("curdir")) != "root":
                acc.append(curdir)
            for subdir in tree.get("subdirs", []):
                acc = inner(acc, subdir.tree)
            return acc

        folders = []
        folders = inner(folders, self.tree)
        return folders

    def to_html_list(self) -> str:
        filearray_to_html = lambda files: (
            f"""
            <li>Files:
                <ul>
                    {"".join(f"<li>{f}</li>" for f in files)}
                </ul>
            </li>
        """
            if len(files)
            else ""
        )

        subdirarray_to_html = lambda subdirs: (
            f"""
            <li>Directories:
                <ul>
                    {"".join(f"{dir_to_html(d)}" for d in subdirs)}
                </ul>
            </li>
        """
            if len(subdirs)
            else ""
        )

        dir_to_html = (
            lambda dir: f"""
            <li>{dir["curdir"]}/
                <ul>
                    {filearray_to_html(dir["files"])}
                    {subdirarray_to_html(dir["subdirs"])}
                </ul>
            </li>
        """
        )
        return f"<ul>{dir_to_html(self.tree)}</ul>"

    # as pre
    def to_html_pre(self) -> str:
        num_spaces = 4
        indent = lambda lvl, spaces: " " * (lvl * spaces)

        filearray_to_html = lambda files, lvl: (
            ("".join(f"{indent(num_spaces, lvl+1)}{f}\n" for f in files))
            if len(files)
            else ""
        )

        subdirarray_to_html = lambda subdirs, lvl: (
            ("".join(f"{dir_to_html(d.tree, lvl+1)}\n" for d in subdirs))
            if len(subdirs)
            else ""
        )

        dir_to_html = lambda dir, lvl: (
            f"{indent(num_spaces, lvl)}{dir['curdir']}/\n"
            + filearray_to_html(dir["files"], lvl)
            + subdirarray_to_html(dir["subdirs"], lvl)
        )
        return f"<pre>{dir_to_html(self.tree, 0)}</pre>"
