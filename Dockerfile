FROM node:16
COPY . .
RUN npm install -g npm@10.8.2
EXPOSE 8080
CMD [ "node" ,"index.js" ]
