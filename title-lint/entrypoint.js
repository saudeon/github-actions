const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
const run = require('./src/run');

run({ core, github, exec }).catch((e) => {
  core.setFailed(e);
});
