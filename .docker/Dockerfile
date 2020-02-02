FROM php:apache

COPY ./.docker/vhost.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /app
RUN apt-get update
RUN apt-get upgrade -y
RUN docker-php-ext-install pdo pdo_mysql
RUN a2enmod rewrite