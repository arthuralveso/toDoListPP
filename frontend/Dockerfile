FROM node:13 AS builder
COPY . /app
WORKDIR /app
RUN npm install && npm run build

FROM nginx as SERVER
COPY --from=builder /app/build /usr/share/nginx/html
