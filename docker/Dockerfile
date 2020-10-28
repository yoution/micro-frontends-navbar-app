# Use the base image with Node.js
FROM node:latest

# Copy the current directory into the Docker image
COPY . /micro-frontends-navbar-app

# Set working directory for future use
WORKDIR /micro-frontends-navbar-app

# Install the dependencies from package.json
RUN npm install

RUN npm run build

CMD npm start
