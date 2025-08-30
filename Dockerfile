FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
# PARA COPIAR LA APP ENTERA
COPY . .
RUN npm run build
EXPOSE 3000
# SOLO PUEDE HABER UN CMD POR Dockerfile
CMD ["npm","start"]

# ! EL .dockerignore indica que fichero evita meter en la construccion de la imagen
