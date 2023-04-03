# base image
FROM node:14.18.1-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install
RUN npm install node-fetch@2

# set NODE_ENV to production
ENV NODE_ENV=production

# copy app files
COPY . .

# expose port
EXPOSE 3001

# start the app
CMD ["node", "server.js"]
