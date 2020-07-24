FROM node:12.16.3

RUN mkdir /app

WORKDIR /app

RUN npm install -g @angular/cli

COPY . .