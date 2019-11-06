npm cache clean --force
rm -rf node_modules
rm -force package-lock.json
cd client
npm cache clean --force
rm -rf node_modules
rm -force package-lock.json
cd ..
npm install
npm run-script install-all