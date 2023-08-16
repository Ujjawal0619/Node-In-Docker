# Usign base image for this image
FROM node:alpine

# Setting working directory, app will run in this path in continer
WORKDIR /usr/src/app

# Copying package files to WORKDIR
COPY package*.json .

# Installing dependencies using package-lock file, ci stands for clean install
RUN npm ci

# copying everything from current to WORKDIR
COPY . .

# Running cmd to start this service
CMD ["npm", "start"]