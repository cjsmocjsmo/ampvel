#!/bin/bash
docker start Movies-httpd TVShows-httpd;
cd /home/pi/ampvel && docker-compose up -d;
