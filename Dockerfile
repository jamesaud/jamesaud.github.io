FROM node:carbon

COPY ./docker/entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

# Copy or mount node app here
WORKDIR /data/

EXPOSE 8080

RUN git config --global user.email "jamesaud@gmail.com" && git config --global user.name "James Audretsch"

ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["npm", "start"]



