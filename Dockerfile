FROM node:16-alpine

WORKDIR /app
COPY package*.json .

# устанавливаем зависимости
RUN npm ci

# Копируем исходный код и собираем приложение
COPY . .
RUN npm run build
