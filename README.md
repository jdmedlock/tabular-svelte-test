# tabular-svelte-test

## Overview

This repo is a test harness used to exercise the functionality of the
`tabular-svelte` npm package. 

## Installation

To support this testing objective the `tabular-svelte` repo must be linked 
to rather than installed like one normally would for a normal npm package.

From a terminal window follow these steps to install the `tabular-svelte` repo:
```
cd <your-development-directory>
git clone https://github.com/jdmedlock/tabular-svelte.git
cd tabular-svelte
npm i
npm link
```

Next, install the `tabular-svelte-test` repo:
```
cd <your-development-directory>
git clone https://github.com/jdmedlock/tabular-svelte-test.git
cd tabular-svelte-testing
npm i
npm link <path-to-tabular-svelte-repo>
```

The `npm link` commands above create a link between the two repos so that
`tabular-svelte-test` has access to the source code in `tabular-svelte`. 
This allows changes to be made to `tabular-svelte` and tested locally before
they are published to npm.

To start & run the `tabular-svelte-test` app enter the `npm run dev` command
from the terminal.