#!/bin/bash
set -e
echo "***** Pulling Latest API Image ******"
docker image pull safderun/coineus-frontend:latest
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