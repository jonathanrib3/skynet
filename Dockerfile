<<<<<<< HEAD
FROM node:lts-alpine

COPY package.json ./

RUN yarn install
RUN yarn prisma
COPY . .
RUN yarn run build

EXPOSE 3333

CMD [ "node", "dist/index.js" ]
=======
FROM node:latest
RUN mkdir -p /home/node/skynet-backend/node_modules && chown -R node:node /home/node/skynet-backend

WORKDIR /home/node/skynet-backend/
COPY package*.json ./
USER node
COPY --chown=node:node . .
RUN npm install
CMD [ "npm run","start" ]
EXPOSE 8000 
>>>>>>> 52b0852b2c30cd73c53eaaf4c96c3175ff36c63a
