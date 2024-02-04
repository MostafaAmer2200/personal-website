FROM --platform=linux/amd64 node:20-alpine3.16


WORKDIR /my-website

COPY . .

RUN npm install
RUN npm run build 

RUN npm install -g serve 

CMD ["serve", "-s", "build"]
