FROM node:11-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -qy

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
