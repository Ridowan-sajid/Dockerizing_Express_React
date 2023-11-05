# First Layer: setting an parent Image
FROM node:17-alpine

RUN npm install -g nodemon

# making API/app as a working dir
WORKDIR /app

COPY package.json .

# to write any command
RUN npm install

# copying everything from api to api/app
COPY . .

# exposing port to reach
EXPOSE 4000

# to run any command in runtime
CMD [ "npm","run","dev" ]