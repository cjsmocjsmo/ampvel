#!/bin/bash
docker start Movies-httpd && docker start TVShows-httpd;
cd /home/pi/ampvel && docker-compose up -d;
