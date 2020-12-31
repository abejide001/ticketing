    FROM node:alpine

    WORKDIR /app
    COPY package.json .
    RUN npm install --quiet --no-progress 
    COPY . .

    CMD ["npm", "start"]