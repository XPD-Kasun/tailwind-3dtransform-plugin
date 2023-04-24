/// <reference path="toMatchCss.d.ts" />
const matcherCss = require('jest-matcher-css');
const { expect } = require('@jest/globals');

const toMatchCss = matcherCss;

expect.extend({
  toMatchCss
});
