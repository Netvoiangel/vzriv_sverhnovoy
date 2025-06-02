FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ ./

RUN npm run build

RUN npm install -g serve

EXPOSE 4173

CMD ["serve", "-s", "dist", "-l", "4173"]
