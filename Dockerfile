FROM node:12
WORKDIR /bycoders_client
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]