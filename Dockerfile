FROM node:12.16-alpine as builder
LABEL stage=intermediate

ARG script=build:development
ARG APP_VERSION=develop

COPY . /app
WORKDIR /app
RUN npm install
RUN npm run ${script} -- --env.APP_VERSION=${APP_VERSION}

FROM nginx:stable-alpine
COPY --from=builder /app/public /etc/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
