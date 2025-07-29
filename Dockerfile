# Use an official lightweight Node.js image
FROM node:18-alpine

# Create and define the working directory for the application
WORKDIR /server

# Copy package.json and package-lock.json to leverage Docker layer caching
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the application
CMD ["npm", "start"]