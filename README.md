

Use this link to see the github page: https://cs401-fall2022.github.io/lesson14-carsonmorris/


# Typescript Hello world

This is a hello world showing typescript in the browser and jest unit testing.

## Build

To build the project run `npm run compile`. The results will be in the build
directory.

```
$ npm run compile

> hello_world@1.0.0 compile
> tsc

$ ls build
__tests__  app.js     app.js.map
```

## Test

This sample is setup to use the jest testing framework. Run `npm test` to run
the tests.

```
$npm test
> hello_world@1.0.0 test
> npm run compile && npm run unit


> hello_world@1.0.0 compile
> tsc


> hello_world@1.0.0 unit
> jest

 PASS  __tests__/test.app.ts
  sum module
    ✓ returns the string hello (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.724 s, estimated 1 s
Ran all test suites.
shane|(master *%=):typescript-hello$ npm test

> hello_world@1.0.0 test
> npm run compile && npm run unit


> hello_world@1.0.0 compile
> tsc


> hello_world@1.0.0 unit
> jest

 PASS  __tests__/test.app.ts
  sum module
    ✓ returns the string hello (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.389 s, estimated 1 s
Ran all test suites.
```
