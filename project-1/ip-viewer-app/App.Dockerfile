# base image
FROM node:14.18.1-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install



# copy app files
COPY /ip-viewer-app .

# expose port
EXPOSE 3000

# start the app
CMD ["npm", "start"]
