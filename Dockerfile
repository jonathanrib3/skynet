FROM node:latest
RUN mkdir -p /home/node/skynet-backend/node_modules && chown -R node:node /home/node/skynet-backend

WORKDIR /home/node/skynet-backend/
COPY package*.json ./
USER node
COPY --chown=node:node . .
RUN npm install
CMD [ "npm run","start" ]
EXPOSE 8000 