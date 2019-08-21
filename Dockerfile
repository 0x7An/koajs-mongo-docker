FROM node:alpine
WORKDIR /app
COPY package.json *.lock ./
RUN yarn
COPY . .
EXPOSE 7000
CMD ["yarn", "start"]
