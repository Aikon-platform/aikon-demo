from .base import *

DEBUG = True
SECRET_KEY = "django-insecure-b(q90mzs928i@!2y-_=duur@tg=&=^6$l$3@!=4!%y)p91s=(2"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

INTERNAL_IPS = [
    "127.0.0.1",
]

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

API_URL = f'http://localhost:{ENV("API_PORT", default=5000)}'
BASE_URL = f"http://localhost:{ENV('FRONT_PORT', default=8000)}"
INTERNAL_URL = BASE_URL
# LOGIN_REQUIRED = False
LOGIN_REQUIRED = True
