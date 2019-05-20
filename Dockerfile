FROM node:4.2
COPY . /src
COPY run.sh /run.sh
RUN cd /src && npm install
# EXPOSE 4000
CMD ["/bin/bash", "/run.sh"]