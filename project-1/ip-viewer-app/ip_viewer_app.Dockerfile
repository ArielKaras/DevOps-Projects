# base image
FROM node:14.18.1-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install
RUN npm install node-fetch@2


# copy app files
COPY /user-ip-application .

# expose port
EXPOSE 3000

# start the app
CMD ["npm", "start"]
