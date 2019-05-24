FROM node:11-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g @angular/cli@7.3.9
RUN npm install npm install node-sass --save-dev
RUN npm install --unsafe-perm=true --allow-root

COPY . .

EXPOSE 4200

CMD ["npm", "start "]
