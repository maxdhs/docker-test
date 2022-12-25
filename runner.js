const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

async function lsExample() {
  const { stdout, stderr } = await exec("docker run test");
  console.log("stdout:", stdout);
  console.error("stderr:", stderr);
}

lsExample();