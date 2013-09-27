NODE_MODULE_COMMANDS_PATH=./node_modules/.bin/
MOCHA=$(NODE_MODULE_COMMANDS_PATH)mocha

install-packages:
	npm install

run-all-tests:
	@NODE_ENV=test $(MOCHA) --timeout 5000 ./tests