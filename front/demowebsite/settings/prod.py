from urllib.parse import urlparse
from environ import Env

from .base import *

DEBUG = False
SECRET_KEY = ENV("SECRET_KEY")

API_URL = ENV("PROD_API_URL")
BASE_URL = ENV("PROD_URL", default="")

if ENV.bool("IS_API_ON_SAME_SERVER", default=False):
    DOCKER_PORT = ENV.int("DJANGO_PORT", 8000)
    INTERNAL_URL = f"http://web:{DOCKER_PORT}"
else:
    INTERNAL_URL = BASE_URL

# URL for the API to send HTTP requests to the Django app
# if the API is dockerized with the frontend, container name is used;
# otherwise, a localhost URL or actual URL will be used
APP_URL_FROM_API = ENV.str("APP_URL_FROM_API", default=BASE_URL)

DOMAIN_NAME = urlparse(BASE_URL).netloc

hosts = ENV.list("ALLOWED_HOSTS", default=[]) + [DOMAIN_NAME, "localhost"]
hosts += ["web"]  # for docker nginx service
https_hosts = [f"https://{host}" for host in hosts]
wildcard_hosts = [f"https://*.{host}" for host in hosts if "." in host]

ALLOWED_HOSTS = hosts + https_hosts + wildcard_hosts
CSRF_TRUSTED_ORIGINS = https_hosts + wildcard_hosts

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"

EMAIL_HOST = ENV("EMAIL_HOST", default="localhost")
# 25 for unencrypted, 587 for TLS, 465 for SSL
EMAIL_PORT = ENV("EMAIL_PORT", default=587)
# tls security. defined manually
EMAIL_USE_TLS = ENV("EMAIL_USE_TLS", default=True)
# ssl security
EMAIL_USE_SSL = True if EMAIL_PORT == 465 else False
# timeout in seconds when attempting to send an email. if not EMAIL_TIMEOUT
# is None, failed email sending will hang, resulting in task errors.
EMAIL_TIMEOUT = 10
# username for the SMTP server
EMAIL_HOST_USER = ENV("EMAIL_HOST_USER", default="")
# password for the SMTP server
EMAIL_HOST_PASSWORD = ENV("EMAIL_HOST_PASSWORD", default="")
# address mail from which the app will send mails
DEFAULT_FROM_EMAIL = ENV("DEFAULT_FROM_EMAIL", default=EMAIL_HOST_USER)
# address mail from which the app will send mails to admins
SERVER_EMAIL = DEFAULT_FROM_EMAIL
# admin's email address
ADMIN_EMAIL = ENV("ADMIN_MAIL", default=EMAIL_HOST_USER)

ADMINS = [(ENV("POSTGRES_USER"), ADMIN_EMAIL)]
