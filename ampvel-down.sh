#!/bin/bash
docker stop Movies-httpd && docker stop TVShows-httpd;
cd /home/pi/ampvel && docker-compose down;

