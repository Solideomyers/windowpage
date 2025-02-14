FROM node:latest AS development

RUN npm install -g pnpm

WORKDIR /app

COPY .npmrc package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]