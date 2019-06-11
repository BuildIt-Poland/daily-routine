// AWS S3 Deploy Script
// Inside CI/CD it should be called after `Install Dependencies` and `Build` steps.

const check = require('check-dependencies');
const fs = require('fs');
const { promisify } = require('util');
const { exec } = require('child_process');

const execAsync = promisify(exec);
const readdirAsync = promisify(fs.readdir);

const BUILD_PATH = './build';
const S3_BUCKET_PATH = process.env.S3_BUCKET_PATH;
const AWS_S3_UPLOAD_CMD = `aws s3 sync ${BUILD_PATH} "${S3_BUCKET_PATH}" --acl public-read --delete`;

async function installAwsCli() {
  console.log('Installing AWS-CLI...');
  try {
    await execAsync('pip install awscli --upgrade --user');
    console.log('AWS-CLI installed')
  } catch (err) {
    throw Error(err);
  }
}

// Ensure that dependencies are installed correctly
async function checkDependencies() {
  console.log('Checking dependencies...');
  const dependenciesCheck = await check();
  if (!dependenciesCheck.depsWereOk) {
    throw Error('Dependencies are not installed correctly');
  }

  console.log('Dependencies OK');
}

// Ensure that `./build` directory exists
async function checkBuild() {
  const buildContent = await readdirAsync(BUILD_PATH);

  console.log('Build package content:');
  buildContent.map(fileName => console.log(`-- ${fileName}`));
}

// Send Build package to AWS S3 service
async function deployApp() {
  console.log('Daily Routine deploy in progress...');
  try {
    await execAsync(AWS_S3_UPLOAD_CMD);
    console.log(`Daily Routine deployed correctly`);
  } catch (err) {
    throw Error(err);
  }
}

checkDependencies()
  .then(checkBuild)
  // .then(installAwsCli)
  .then(deployApp)
  .catch(err => {
    console.error(`Deploy failed: ${err}`);
    process.exitCode = 1;
  });
