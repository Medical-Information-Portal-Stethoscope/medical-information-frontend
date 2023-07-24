FROM node:16-alpine as builder

WORKDIR /app
COPY package*.json .

# устанавливаем зависимости
RUN npm ci

# Копируем исходный код и собираем приложение
COPY . .
RUN npm run build
RUN mkdir wtf

FROM debian:12-slim as frontend
COPY --from=builder /app/build /app/build
COPY --from=builder /app/wtf /app/build/wtf
