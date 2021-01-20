FROM gcr.io/plat-demo/auth 
WORKDIR /app
COPY package.json .
COPY node_modules .
# RUN npm install --only=prod -registry=http://registry.npmjs.org/
COPY . .
CMD ["npm", "start"]