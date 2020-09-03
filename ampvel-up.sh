#!/bin/bash
docker start Movies-httpd TVShows-httpd;
docker-compose -f /home/pi/ampvel/docker-compose.yml -d --build up;
