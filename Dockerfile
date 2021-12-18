FROM node:carbon-alpine

WORKDIR /app_backend

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "./index.js"]

