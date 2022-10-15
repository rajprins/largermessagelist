#!/usr/bin/env bash

target=LargerMessageList.xpi

clear
echo
echo ">>> Building and packaging LargerMessageList extension"

BASEDIR=$(pwd)

if [[ -f $target ]] ; then
   echo ">>> Old build target found. Removing..."
   rm $target
fi

cd src
zip -r ../${target} . -x ".*" -x "__MACOSX" -x ".DS_Store"

cd $BASEDIR
echo
echo "All done. You may now install file ${target}"
echo
