# this procject use to make open source munthakab hadisth sqlite database.
# insya allah it will be okay

# npm install -g forever
forever start -c http-server
forever start app.js
forever start `which http-server` 0.0.0.0 --port 80

# pm2 
npm install pm2 -g