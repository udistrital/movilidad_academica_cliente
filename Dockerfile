# Setup and build client

FROM node:11-alpine as client

WORKDIR /usr/app/client
COPY client/package*.json ./
RUN npm install -qy
COPY client/ ./
RUN npm run build
