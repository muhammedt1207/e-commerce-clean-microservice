FROM node:21.7.1
WORKDIR /app
COPY  package.json .
RUN npm install
COPY . .
EXPOSE 3004
CMD [ "npm","run","dev" ]