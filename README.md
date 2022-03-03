# @heusalagroup/test

This is a unit test environment for our TypeScript libraries.

Our own projects usually require just few dependencies, if any at all. Adding all testing tools would add 300+ 
dependencies into our projects. 

This way the testing environment is separated from the actual source code of our projects. 

It also makes it easier to run newer tests against older versions of the project in order to test backwards 
compatibility.

## Libraries

| Repository                                                      | Summary                  | Access  |
| --------------------------------------------------------------- | ------------------------ | ------- |
| [@heusalagroup/typescript](https://github.com/heusalagroup/typescript)  | The core library         | Public  |
| [@heusalagroup/ui](https://github.com/heusalagroup/ui)                  | The UI library           | Public  |
| [@heusalagroup/repository](https://github.com/heusalagroup/repository)  | The Repository library   | Public  |
| [@sendanor/pipeline](https://github.com/sendanor/pipeline)      | The pipeline processor   | Private |
| [@heusalagroup/matrix](https://github.com/heusalagroup/matrix)          | The Matrix library       | Private |

## Running tests

For one time only:

```
npm run test:ci
```

While developing the code:

```
npm test
```

