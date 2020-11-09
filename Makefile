backup:
	docker-compose exec tribes-mongo sh -c 'exec mongodump -d tribes --archive' > ./dist/backup.archive