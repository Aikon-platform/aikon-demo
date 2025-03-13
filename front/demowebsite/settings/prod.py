from urllib.parse import urlparse

from .base import *

DEBUG = False
SECRET_KEY = ENV("SECRET_KEY")

ADMIN_EMAIL = ENV("ADMIN_EMAIL")
ADMINS = [(ENV("ADMIN_NAME"), ADMIN_EMAIL)]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": ENV.str("POSTGRES_DB", default="demowebsite"),
        "USER": ENV.str("POSTGRES_USER", default="demowebsite"),
        "PASSWORD": ENV.str("POSTGRES_PASSWORD"),
        "HOST": ENV.str("DB_HOST", default="db"),
        "PORT": ENV.str("DB_PORT", default="5432"),
    }
}

API_URL = ENV("PROD_API_URL")
BASE_URL = ENV("BASE_URL", default="https://aikon-demo.enpc.fr/")
DOMAIN_NAME = urlparse(BASE_URL).netloc
ALLOWED_HOSTS = [
    *ENV.list("ALLOWED_HOSTS", default=[]),
    DOMAIN_NAME,
    "localhost",
]

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"

EMAIL_HOST = ENV("EMAIL_HOST", default="localhost")
EMAIL_PORT = ENV("EMAIL_PORT", default=25)
EMAIL_HOST_USER = ENV("EMAIL_HOST_USER", default=ADMIN_EMAIL)
EMAIL_HOST_PASSWORD = ENV("EMAIL_HOST_PASSWORD", default="")
DEFAULT_FROM_EMAIL = ENV("DEFAULT_FROM_EMAIL")
SERVER_EMAIL = ENV("SERVER_EMAIL", default=EMAIL_HOST_USER)
