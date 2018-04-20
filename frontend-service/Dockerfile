FROM node:8.1.4-alpine as build

COPY package.json ./
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .
RUN $(npm bin)/ng build --prod


FROM nginx:1.13 as runtime

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /ng-app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
