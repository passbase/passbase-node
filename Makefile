.PHONY: dev deps test

deps: node_modules

dev: deps
	npm run test:watch

test: deps
	npm run lint;
	npm run test;

build: deps
	npm run clean;
	npm run build;

prepare-release: test build

release-patch: prepare-release
	npm version patch

release-minor: prepare-release
	npm version minor

release-major: prepare-release
	npm version major

node_modules:
	npm install
	touch node_modules
