#!/bin/sh

echo "creating build directory"

rm -rf build && mkdir build

echo "building bolt-docs"

export PIP_DISABLE_PIP_VERSION_CHECK=1

pip install -r bolt-docs/requirements.txt >/dev/null

python -m mkdocs build -f bolt-docs/mkdocs.yml

echo "building site"

cp -r site/* build/output

echo "built! check build/output"
