FROM alpine:3.15
ARG user=reactUser
RUN addgroup -S reactUser && adduser -S reactUser -G ${user}
ARG ARCH='x64'
ARG NODE_VERSION=18.4.0

RUN apk update
RUN apk upgrade
RUN apk search curl
RUN apk add --no-cache libstdc++=10.3.1_git20211027-r0 && apk add --no-cache --virtual .build-deps-node curl --repository=http://dl-cdn.alpinelinux.org/alpine/v3.10/main

RUN curl --version
RUN curl -fsSLO --compressed "https://unofficial-builds.nodejs.org/download/release/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" && \
    tar -xJf "node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" -C /usr/local --strip-components=1 --no-same-owner && \
    ln -s /usr/local/bin/node /usr/local/bin/nodejs && \
    apk del .build-deps-node && \
    node --version && \
    npm --version

ENV NODE_ENV production

RUN mkdir app

RUN apk add bash=5.1.16-r0  --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

ARG YARN_VERSION=1.22.19
RUN apk add --no-cache --virtual .build-deps-yarn curl tar=1.34-r0 --repository=http://dl-cdn.alpinelinux.org/alpine/v3.10/main && \
curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" && \
mkdir -p /opt && \
tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ && \
ln -s /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn && \
rm yarn-v$YARN_VERSION.tar.gz && \
yarn --version

RUN npm install http-server -g --silent

COPY . ./app
WORKDIR /app
# Note only to be used in case where the package is not pre build.
# RUN yarn install && yarn cache clean

EXPOSE 3000
CMD [ "yarn", "start:prod" ]
