#!/usr/bin/env bash
eslint index.js
uglifyjs --compress --mangle --screw-ie8 --source-map -- index.js > index.min.js