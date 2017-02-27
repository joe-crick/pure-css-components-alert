#!/usr/bin/env bash
uglifyjs --compress --mangle --screw-ie8 --source-map -- index.js > index.min.js