const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function lsExample() {
  console.log("starting to run container");
  const { stdout, stderr } = await exec("docker run node");
  console.log("stdout:", stdout);
  console.error("stderr:", stderr);
}

lsExample();
