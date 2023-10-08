FROM node:20.8-buster-slim as node

RUN mkdir -p /opt/tribes
RUN chown 1000:1000 /opt/tribes

USER node

WORKDIR /opt/tribes

COPY package-lock.json .
COPY package.json .

RUN npm ci --quiet
COPY . .
RUN npx nx run tribes-api:build

CMD ["node", "dist/apps/tribes-api/main.js"]
