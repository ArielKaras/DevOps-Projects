# Build stage
FROM node:14.18.1-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:14.18.1-alpine AS production

# Set working directory
WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy the build output from the build stage
COPY --from=build /app/build /app/build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]
