FROM nginx

#the dist folder get build by running 'ng build --prod'
#this requires node+npm and the package @angular/cli (npm install -g @angular/cli)
#sample angular pipeline to build applications in jenkins see pipelines repo
COPY ./dist/devops-api-frontend/ /usr/share/nginx/html

EXPOSE 80
