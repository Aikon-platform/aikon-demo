# Final image
FROM ubuntu:22.04

# Use args passed in the build command and retrieved from docker/.env
ARG USERID
ARG PORT

ENV USER=aikondemo
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/home/${USER}

RUN useradd -u ${USERID} -m -d /home/${USER} ${USER}

# Set up environment
ENV TERM=linux
SHELL ["/bin/bash", "-c"]
ENV TZ=Europe/Paris
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update && apt-get install -y \
    wget \
    unzip \
    zip \
    curl \
    ca-certificates \
    redis-server \
    supervisor \
    tzdata \
    ffmpeg \
    libsm6 \
    libxext6 \
    libpq-dev \
    build-essential \
    poppler-utils \
    ghostscript \
    python3.10 \
    python3.10-venv \
    python3-pip

WORKDIR /home/${USER}

COPY --chown=${USER} ./front/requirements.txt ./front/requirements-prod.txt ./

# Install python dependencies
RUN python3.10 -m venv venv && \
    /home/${USER}/venv/bin/pip install --upgrade pip && \
    /home/${USER}/venv/bin/pip install -r requirements-prod.txt

# Copy app files
COPY --chown=${USER} front /home/${USER}/app
COPY --chown=${USER} docker/supervisord.conf /home/${USER}/supervisord.conf

# Must match the PORT in docker.sh
EXPOSE ${PORT}

RUN mkdir -p /home/${USER}/app/staticfiles && chown ${USER}:${USER} /home/${USER}/app/staticfiles

COPY --chown=${USER} docker/manage.sh /home/${USER}/manage.sh
RUN chmod +x /home/${USER}/manage.sh
RUN /home/${USER}/manage.sh

# Launch app
CMD export LC_ALL=C.UTF-8 && export LANG=C.UTF-8 && \
    source venv/bin/activate && \
    supervisord -c /home/${USER}/supervisord.conf
