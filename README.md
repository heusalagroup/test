![CI](https://github.com/heusalagroup/test/actions/workflows/ci.yml/badge.svg)

# @heusalagroup/test

This is a unit test environment for our TypeScript libraries.

Our own projects usually require very few dependencies. Adding all testing tools
would add over 300 dependencies to our projects, which can be burdensome.
Instead, we have created this separate testing environment to keep our projects
lightweight while still providing a comprehensive testing environment.

This separation also makes it easier to run newer tests against older versions
of the project to test backwards compatibility.

## Working on the Development Environment

### Fetching the Source Code

To get started, clone the repository and initialize the submodules:

```bash
git clone git@github.com:heusalagroup/test.git test
cd test
git submodule update --init --recursive
```

### Updating the Source Code Modules

Next, install the necessary dependencies:

```bash
npm install
```

### Updating source code modules

To update the source code modules to the latest version, run:

```bash
./scripts/pull-all.sh
```

## Libraries

| Repository                                                                         | Summary                |
|------------------------------------------------------------------------------------|------------------------|
| [@heusalagroup/fi.hg.core](https://github.com/heusalagroup/fi.hg.core)             | The core library       |
| [@heusalagroup/fi.hg.node](https://github.com/heusalagroup/fi.hg.node)             | The node library       |
| [@heusalagroup/fi.hg.backend](https://github.com/heusalagroup/fi.hg.backend)       | The backend library    |
| [@heusalagroup/fi.hg.frontend](https://github.com/heusalagroup/fi.hg.frontend)     | The frontend library   |
| [@heusalagroup/fi.hg.repository](https://github.com/heusalagroup/fi.hg.repository) | The Repository library |
| [@heusalagroup/fi.hg.pipeline](https://github.com/heusalagroup/fi.hg.pipeline)     | The pipeline processor |
| [@heusalagroup/fi.hg.matrix](https://github.com/heusalagroup/fi.hg.matrix)         | The Matrix library     |

## Running Tests

To run the tests once:

```
npm run test:ci
```

While developing code, you can use the following command to continuously run 
tests as you make changes:

```
npm test
```

## Development with GitHub Using SSH

To use SSH when working with submodules in this repository, you will need to 
configure your Git settings as follows:

```
git config --global url."git@github.com:heusalagroup/".insteadOf "https://github.com/heusalagroup/"
```

This configuration is necessary because the repository uses HTTPS links for
read-only access. However, you may prefer to use SSH when pushing and pulling 
changes.

## License

Copyright (c) Heusala Group. All rights reserved. Licensed under the MIT License 
(the "[License](./LICENSE)");

