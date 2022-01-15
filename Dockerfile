FROM node:16.10.0

WORKDIR /arduino_web

COPY yarn.lock /arduino_web
COPY package.json /arduino_web

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]