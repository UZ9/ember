FROM node:18-alpine

COPY ../frontend /usr/src/server

# Create server directory
WORKDIR /usr/src/server

RUN yarn install

EXPOSE 4040

ENV NODE_ENV production

CMD ["npm", "run", "start"]