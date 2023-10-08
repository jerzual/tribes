FROM node:20.8-buster-slim as node

RUN mkdir -p /opt/tribes
RUN chown 1000:1000 /opt/tribes

RUN npm i -g http-server

USER node

WORKDIR /opt/tribes


COPY package-lock.json .
COPY package.json .

RUN npm ci --quiet
COPY . .
RUN npx nx run tribes-web:build

CMD ["npx", "http-server", "dist/apps/tribes-web"]
