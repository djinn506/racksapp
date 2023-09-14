FROM node:18-alpine

WORKDIR /racks/opt

COPY ./racks/package.json .

RUN npm install

COPY ./racks .

ENV DB_USER=servers
ENV DB_NAME=servers
ENV DB_PASSWORD=secret123!

EXPOSE 3000

