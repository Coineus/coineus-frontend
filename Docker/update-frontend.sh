#!/bin/bash
set -e
echo "***** Pulling $1 Tagged Image ******"
docker image pull "safderun/coineus-frontend:$1"
echo ""
echo "***** Removing Old Container *****"
START=$(date +%s)
docker container rm -f coineus-frontend
echo ""
echo "***** Docker-Compose Up Runnig  *****"
docker compose -f ./Docker/update-frontend.yaml up -d
echo ""
END=$(date +%s)
DIFF=$(( $END - $START ))
echo "Website Updated Succesfully, Interruption for $DIFF Seconds"