FROM node:18.11.0

RUN apt-get update && \
    apt-get install -y nano openssl curl

RUN curl -o- -L https://yarnpkg.com/install.sh | sh
RUN mkdir /app
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install --no-cache --frozen-lockfile

COPY ./ /app
ENV NODE_ENV production
ENV NODE_OPTIONS --max_old_space_size=8192
RUN yarn run build

CMD yarn cs:import -y && yarn run start
