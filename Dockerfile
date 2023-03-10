FROM docker:dind
FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "test.js" ]