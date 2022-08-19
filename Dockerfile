#-----DEVELOPMENT ENVIRONMENT------------
FROM node:18-alpine3.15 as development

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

#-----PRODUCTION ENVIRONMENT------------
FROM node:18-alpine3.15 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app

COPY package*.json .

RUN npm ci --only=production

COPY --from=development /usr/app/dist ./dist

#CMD ["node", "dist/app.js"]