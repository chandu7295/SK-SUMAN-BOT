FROM node:16
COPY . .
RUN npm install -g npm@8.19.4
EXPOSE 8080
CMD [ "node" ,"index.js" ]
