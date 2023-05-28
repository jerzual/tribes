FROM node:16.20.0-buster-slim as node

RUN mkdir -p /opt/tribes
RUN chown 1000:1000 /opt/tribes

USER node

WORKDIR /opt/tribes

COPY package-lock.json .
COPY package.json .

RUN npm ci --quiet --production
COPY . .
RUN npx nx run tribes-api:build
COPY dist/tribes-api dist/tribes-api

CMD ["node", "dist/tribes-api/main.js"]