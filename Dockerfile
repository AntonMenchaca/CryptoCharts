FROM node:15.12.0-alpine3.10 as builder

WORKDIR /app

COPY . .

RUN npm ci && npm run build

# From builder stage

FROM node:15.12.0-alpine3.10

USER node

COPY --from=builder --chown=node:node /app .


CMD [ "node", "server" ]