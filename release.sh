# 创建压缩目录
mkdir -p compress

# 构建完整版本
cd OpenList-Frontend
pnpm install
pnpm build
cd ..
tar -czvf compress/dist.tar.gz -C OpenList-Frontend/dist .

# 构建 Lite 版本
cd OpenList-Frontend
rm -rf dist/*
pnpm build:lite
cd ..
tar -czvf compress/dist-lite.tar.gz -C OpenList-Frontend/dist .