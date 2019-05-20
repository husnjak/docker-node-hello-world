#!/bin/sh

node server.js &
sleep 2
npm run test
#npm run nightwatch