# base image
FROM node:14.18.1-alpine as build

# set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# copy app files
COPY . .

# Production stage
FROM node:14.18.1-alpine as production

# set working directory
WORKDIR /app


# copy build output from build stage
COPY --from=build /app /app/

# expose port
EXPOSE 3001

# start the app
CMD ["node", "server.mjs"]
