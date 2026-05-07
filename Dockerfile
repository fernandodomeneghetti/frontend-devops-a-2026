FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./site-faculdade/* /usr/share/nginx/html

EXPOSE 80
