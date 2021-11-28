FROM node:lts-alpine

COPY package.json ./

RUN yarn install
RUN yarn prisma
COPY . .
RUN yarn run build

EXPOSE 3333

CMD [ "node", "dist/index.js" ]