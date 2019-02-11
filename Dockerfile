FROM node:current-alpine

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]