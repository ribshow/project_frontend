FROM node:18-alpine
EXPOSE 3000
COPY package*.json ./
RUN npm install
WORKDIR /public
COPY . .
CMD ["npm", "start"]