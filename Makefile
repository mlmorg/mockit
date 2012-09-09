test:
	npm test

lint:
	find test lib -name "*.js" -print0 | xargs -0 \
		jslint --indent 2 --nomen --vars --maxlen 80

.PHONY: test
