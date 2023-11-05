FROM node:17-alpine

WORKDIR /app

COPY package.json .

#RUN chown -R node:node node_modules

RUN npm install

COPY . .

EXPOSE 4040

CMD ["npm", "run", "dev"]
