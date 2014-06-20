var _ = require('lodash'),
  path = require('path'),
  planner = require('xtuple-server/spec/planner');

describe('uninstall-live', function () {
  this.planObject = require('../plans')['uninstall-live'];
  this.options = {
    planName: 'uninstall-live',
    plan: this.planObject.plan,
    requiresRoot: true,
    xt: {
      name: 'xtservtest',
      version: process.env.XT_VERSION,
      demo: true
    },
    pg: {
      version: process.env.XT_PG_VERSION,
      capacity: 8
    }
  };
  planner.describe(this);
});
