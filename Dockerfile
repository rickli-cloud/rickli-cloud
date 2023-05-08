FROM nginx/unit:1.29.1-node18

WORKDIR /www
COPY ./dist ./static

WORKDIR /docker-entrypoint.d/
COPY ./unit.json ./init.json

EXPOSE 8080

WORKDIR /

