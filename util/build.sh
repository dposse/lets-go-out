#!/usr/bin/env bash

# Script modified from https://levelup.gitconnected.com/setting-up-a-full-stack-typescript-application-featuring-express-and-react-ccfe07f2ea47

### Build BackEnd ###

# Remove existing production folder
rm -rf ./build/

# Transpile .ts to .js
yarn tsc --sourceMap false

### Bundle FrontEnd ###

# Create the directory for React
mkdir -p ./build/client/

# Navigate to the react directory
cd ./client

# Probably don't need but just in case remove build
rm -rf ./build

# Build React code
yarn build

# Copy contents to main build directory
cp -R ./build/. ../build/client/

# Delete build dir in react so we dont have duplicate
rm -rf ./build/