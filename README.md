# AngularStorybookVitest

An example project showing Storybook Component Testing with Angular and Vitest using the `unit-test` builder in Angular v21.

## Setup

```sh
npm install
```

## Running Tests

```sh
npm run test-storybook
```

## Known issues

- Transformed code doesn't get handled by Storybook without a workaround.
- Unit tests aren't re-run on file changes.

https://github.com/angular/angular-cli/issues/32159
