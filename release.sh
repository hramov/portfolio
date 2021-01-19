git add .
git commit -m "Some changes"
git push origin main
npm run build
cd ./dist
git init
git remote add origin https://github.com/hramov/hramov.github.io
git checkout -b main
git add .
git commit -m "Initial commit"
git push origin main -f
