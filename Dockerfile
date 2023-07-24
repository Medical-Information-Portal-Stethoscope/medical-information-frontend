FROM node:16-alpine as builder

WORKDIR /app
COPY package*.json .

# устанавливаем зависимости
RUN npm ci

# Копируем исходный код и собираем приложение
COPY . .
RUN npm run build

FROM debian:12-slim as frontend
COPY --from=builder /app/build /app/build
