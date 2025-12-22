/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  maxWorkers: 1, // fix for Node 20+ availableParallelism issue
};
