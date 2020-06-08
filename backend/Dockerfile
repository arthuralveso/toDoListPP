FROM node:13

COPY . .

ENV MONGO_DATABASE_URL mongodb://localhost:27017/todolist?authSource=admin
ENV SECRET 0c1b507d7847670f72dd773813c42745

RUN npm install

EXPOSE 3333

ENTRYPOINT npm start