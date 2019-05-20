#/bin/bash

node ./src/server.js &
npm run test
npm run nightwatch