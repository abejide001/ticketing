FROM node:alpine
WORKDIR /app
COPY package.json .
COPY node_modules .
# RUN npm install --only=prod
COPY . .
CMD ["npm", "start"]