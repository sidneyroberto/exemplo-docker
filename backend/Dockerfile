FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g nodemon

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]