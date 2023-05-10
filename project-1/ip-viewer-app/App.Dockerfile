# Build stage
FROM node:14.18.1-alpine

# set working directory
WORKDIR /app

COPY . .

# Install dependencies and serve
RUN npm install
RUN npm install -g serve
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]
