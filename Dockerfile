FROM node:18 as builder

WORKDIR /app

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

FROM oveits/docker-nginx-busybox

ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/html/

EXPOSE 80 443
