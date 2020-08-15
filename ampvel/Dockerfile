FROM node:14.5.0-buster-slim
COPY . .
WORKDIR /ampvel
RUN \
    npm run-script build && \
    npm install
CMD ["/usr/local/bin/npm", "start"]
