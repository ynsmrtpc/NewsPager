FROM node:14
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 2800
CMD ["yarn", "start"]