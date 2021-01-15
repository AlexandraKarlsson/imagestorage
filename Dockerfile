# To buld the image type:
# > docker image build -t alexandrakarlsson/imagestore .
# To list the images
# > docker image ls
# To run the imges type:
# > docker container run -p 8010:8010 --rm alexandrakarlsson/imagestore
# To tag the image for docker hub storage
# > docker image tag imagestore:latest alexandrakarlsson/imagestore:latest
# To push the image to docker hub
# > docker login
# > docker image push alexandrakarlsson/imagestore:latest

FROM node:12

RUN mkdir -p /home/node/app/images

RUN mkdir -p /home/node/app/backup

RUN mkdir -p /home/node/app/node_modules 

RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY ./package*.json ./

USER node

RUN npm install

COPY --chown=node:node ./*.js ./

EXPOSE 8010

CMD [ "node", "index.js" ]