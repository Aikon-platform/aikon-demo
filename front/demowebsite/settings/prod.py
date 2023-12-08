from .base import *

DEBUG = False
SECRET_KEY = ENV("SECRET_KEY")
ALLOWED_HOSTS = ['discover.enpc.fr', 'discover-demo.enpc.fr', 'localhost']

ADMINS = [(ENV("ADMIN_NAME"), ENV("ADMIN_EMAIL"))]

DATABASES = {
    'default': {
        'ENGINE': "django.db.backends.postgresql_psycopg2",
        'NAME': ENV("DB_NAME"),
        'USER': ENV("DB_USER"),
        'PASSWORD': ENV("DB_PASSWORD"),
        'HOST': ENV("DB_HOST"),
        'PORT': ENV("DB_PORT"),
    }
}

DTI_API_URL = ENV("DTI_API_URL")
BASE_URL = ENV("BASE_URL")

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_HOST = ENV("EMAIL_HOST", default="localhost")
EMAIL_PORT = ENV("EMAIL_PORT", default=25)
EMAIL_HOST_USER = ENV("EMAIL_HOST_USER", default="")
EMAIL_HOST_PASSWORD = ENV("EMAIL_HOST_PASSWORD", default="")

DEFAULT_FROM_EMAIL = ENV("DEFAULT_FROM_EMAIL")
SERVER_EMAIL = ENV("SERVER_EMAIL", default=DEFAULT_FROM_EMAIL)