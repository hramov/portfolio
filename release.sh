git add .
git commit -m "Some changes"
git push origin main
npm run build
cd ./dist
scp -a ./ 185.154.53.78:/var/www/hramovdev
