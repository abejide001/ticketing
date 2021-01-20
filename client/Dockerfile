FROM gcr.io/plat-demo/auth 
WORKDIR /app
COPY package.json .
COPY node_modules .
# RUN npm install
COPY . .
CMD ["npm", "run", "dev"]