FROM node:20

WORKDIR /web-academy-test
COPY package.json .
RUN npm install
COPY . .
