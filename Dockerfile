FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN mkdir -p /app
RUN chown 1000:1000 /app

COPY pnpm-lock.yaml /app/
COPY package.json /app/

WORKDIR /app

# intermediate image with prod dependencies only
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# intermediate image with source and build artifacts
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . /app
RUN pnpm exec nx run-many -t build

FROM base AS api
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist/apps/tribes-api /app/dist/apps/tribes-api
EXPOSE 4000

USER node

WORKDIR /app
CMD ["node", "dist/apps/tribes-api/main.js"]

FROM base AS web
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist/apps/tribes-web /app/dist/apps/tribes-web

USER node

WORKDIR /app

CMD ["pnpx", "http-server", "dist/apps/tribes-web"]
