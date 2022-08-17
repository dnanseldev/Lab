FROM node:18-alpine3.15

WORKDIR /usr/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .


#RUN npm install --legacy-peer-deps
# If you are building your code for production
# RUN npm ci --only=production

#RUN npm install --quiet --production




CMD [ "npm", "start" ]