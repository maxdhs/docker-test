FROM docker

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "test.js" ]