FROM php:7.4.5-apache

WORKDIR /var/www/html/
COPY ./ .

RUN apt update && apt install -y unzip

RUN pecl install apcu-5.1.18; \
    pecl clear-cache;

RUN docker-php-ext-install mysqli pdo pdo_mysql opcache
RUN docker-php-ext-enable apcu
COPY ./docker/opcache.ini /usr/local/etc/php/conf.d/opcache.ini

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install

ENV APACHE_DOCUMENT_ROOT /var/www/html/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
RUN a2enmod rewrite