FROM node:22-alpine3.19
LABEL maintainer="Muhammad Ali Ghaznavi <alighaznavi10@gmail.com>"

COPY . /app

WORKDIR /app
EXPOSE 5173

RUN npm install && \
    adduser \
        --disabled-password \
        --no-create-home \
        basic-user && \
    chown -R basic-user:basic-user node_modules

# USER basic-user
