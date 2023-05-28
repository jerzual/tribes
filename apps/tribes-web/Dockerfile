FROM node:16.20.0-buster-slim as node

RUN mkdir -p /opt/tribes
RUN chown 1000:1000 /opt/tribes

USER node

WORKDIR /opt/tribes

RUN npm i -g http-server

COPY dist/tribes-web dist/tribes-web

CMD ["hs", "dist/tribes-web"]