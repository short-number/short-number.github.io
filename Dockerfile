FROM node:24-alpine

RUN apk update && apk add --no-cache git

WORKDIR /var/www/html

CMD ["npm", "run", "dev"]
