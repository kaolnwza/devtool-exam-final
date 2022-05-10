FROM node:alpine

WORKDIR /react/app

COPY package.json /react/app/

COPY package-lock.json /react/app/

COPY . /react/app/

RUN npm i

CMD ["npm",  "start"]