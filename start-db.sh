#!/bin/bash
set -e

SERVER="mariadb_local";

echo "SCRIPT | Stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER]"
(docker kill $SERVER || :) && \
  (docker rm $SERVER || :) && \
  docker-compose up

# wait for pg to start
echo "SCRIPT | Sleep wait for pg-server [$SERVER] to start";
SLEEP 3;
