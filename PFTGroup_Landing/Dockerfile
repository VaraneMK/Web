FROM node:latest
WORKDIR /home/app
COPY ./my-app .
RUN apt-get update && apt-get install -y \
    nano \
    mc \
    zsh
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# обновляем npm
RUN npm install -g npm@8.12.1
# проверка на ошибки — отключена
RUN export DOCKER_SCAN_SUGGEST=false
# порт для внешнего доступа
EXPOSE ${PORT}