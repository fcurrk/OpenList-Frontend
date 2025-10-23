# replace version
cd OpenList-Frontend
# version=$(git describe --abbrev=0 --tags)
# sed -i -e "s/\"version\": \"0.0.0\"/\"version\": \"$version\"/g" package.json
# cat package.json

# build
pnpm install
# pnpm i18n:release
pnpm build
cp -r dist ../
cd ..

mkdir compress
tar -czvf compress/dist.tar.gz dist/*
zip -r compress/dist.zip dist/*

cd OpenList-Frontend
rm -rf dist/*
pnpm build:lite
tar -czvf compress/dist-lite.tar.gz dist/*
zip -r compress/dist-lite.zip dist/*