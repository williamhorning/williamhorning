#!/bin/sh

echo "creating build directory"

rm -rf build && mkdir build

cd build

BUILD_DIR=$(pwd)

echo "cloning bolt repo"

git clone --no-checkout -q https://github.com/williamhorning/bolt >/dev/null

cd bolt

git sparse-checkout init --cone

git sparse-checkout set packages/bolt-dash

git checkout -q main

echo "building bolt-dash/docs"

cd packages/bolt-dash/docs

export PIP_DISABLE_PIP_VERSION_CHECK=1

pip install -r requirements.txt >/dev/null

python -m mkdocs -q build

echo "finished building bolt-dash/docs"

cd $BUILD_DIR

echo "copying files to output direcotry"

cp -r ../site output

cp -r ./bolt/packages/bolt-dash/docs/output ./output/bolt/docs

echo "built site! check build/output"
