FROM node:16-alpine

WORKDIR /app

# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh
# RUN npm install -g npm@8.4.1

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
COPY ./ ./

EXPOSE 3000
CMD [ "yarn", "dev" ]


# ENTRYPOINT ["/entrypoint.sh"]
# CMD ["npm", "start"]
# CMD ["npm", "run", "dev"]
