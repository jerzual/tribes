FROM node:14 as node

RUN mkdir -p /opt/tribes
RUN chown 1000:1000 /opt/tribes

USER node

WORKDIR /opt/tribes

COPY package-lock.json .
COPY package.json .

RUN npm ci --quiet

CMD ["node", "dist/main.js"]