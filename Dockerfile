FROM node:24-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
