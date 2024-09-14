FROM node:18.17.0-alpine AS build-stage

# Узнаём моща раннера
RUN apk add --update --no-cache nano openssl curl git
RUN curl -o- -L https://yarnpkg.com/install.sh | sh
RUN mkdir /app
ADD ./package.json /app/package.json
ADD ./yarn.lock /app/yarn.lock
WORKDIR /app
RUN yarn install --no-cache --frozen-lockfile
COPY ./ /app/

RUN yarn tsc --noEmit
#RUN yarn eslint ./src
RUN yarn build


FROM nginx:1.15.9-alpine

ADD ./docker/nginx.conf /etc/nginx/nginx.conf
ADD ./docker/domain.conf /etc/nginx/sites-available/domain.conf

RUN mkdir /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/domain.conf /etc/nginx/sites-enabled/domain
RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist/ /var/www/
WORKDIR /var/www/

CMD ["nginx"]
