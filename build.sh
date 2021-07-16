#!/usr/bin/env bash

clear
echo
echo ">>> Building and packaging LargerMessageList extension"

BASEDIR=$(pwd)

cd src
zip -r LargerMessageList.zip . -x ".*" -x "__MACOSX" -x ".DS_Store"
mv LargerMessageList.zip ../LargerMessageList.xpi

cd $BASEDIR
echo
echo "All done. You may now install file LargerMessageList.xpi"
echo
