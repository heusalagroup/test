# @heusalagroup/test

This is a unit test environment for our TypeScript libraries.

Our own projects usually require just few dependencies, if any at all. Adding all testing tools would add 300+ 
dependencies into our projects. 

This way the testing environment is separated from the actual source code of our projects. 

It also makes it easier to run newer tests against older versions of the project in order to test backwards 
compatibility.

## Working on the development environment

### Fetching source code

```bash
git clone git@github.com:heusalagroup/test.git test
cd test
git submodule update --init --recursive
```

### Updating source code modules

```bash
./scripts/pull-all.sh
```

## Libraries

| Repository                                                      | Summary                  | Access  |
| --------------------------------------------------------------- | ------------------------ | ------- |
| [@heusalagroup/fi.hg.core](https://github.com/heusalagroup/fi.hg.core)  | The core library         | Public  |
| [@heusalagroup/fi.hg.ui](https://github.com/heusalagroup/fi.hg.ui)                  | The UI library           | Public  |
| [@heusalagroup/fi.hg.repository](https://github.com/heusalagroup/fi.hg.repository)  | The Repository library   | Public  |
| [@sendanor/pipeline](https://github.com/sendanor/pipeline)      | The pipeline processor   | Private |
| [@heusalagroup/fi.hg.matrix](https://github.com/heusalagroup/fi.hg.matrix)          | The Matrix library       | Private |

## Running tests

For one time only:

```
npm run test:ci
```

While developing the code:

```
npm test
```

## License

Copyright (c) Heusala Group. All rights reserved. Licensed under the MIT License (the "[License](./LICENSE)");

