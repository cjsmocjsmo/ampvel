#!/bin/bash
docker stop Movies-httpd TVShows-httpd;
cd /home/pi/ampvel && docker-compose down;

