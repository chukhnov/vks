FROM node:alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat

WORKDIR /opt/app

COPY package*.json ./

ENV MONGO_URL "mongodb://mongo:27017"
ENV DB_NAME vks

RUN npm install

COPY . .

RUN npm run build

RUN npx next telemetry disable

CMD ["npm", "run", "dev"]