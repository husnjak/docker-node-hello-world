FROM node:alpine
COPY . /src
COPY run.sh /src/run.sh
WORKDIR /src
RUN npm install
# EXPOSE 4000
CMD ["/bin/sh", "/src/run.sh"]