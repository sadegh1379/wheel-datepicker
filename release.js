const { execSync } = require('child_process');
const inquirer = require('inquirer');

async function runRelease() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'versionType',
        message: 'Which version type do you want to bump?',
        choices: ['patch', 'minor', 'major'],
        default: 'patch',
      },
    ]);

    const versionType = answers.versionType;

    console.log(`Running npm version ${versionType}...`);
    execSync(`npm version ${versionType}`, { stdio: 'inherit' });

    console.log('Building project...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('Publishing package...');
    execSync('npm publish --access public', { stdio: 'inherit' });

    console.log('Release done!');
  } catch (err) {
    console.error('Error during release:', err);
    process.exit(1);
  }
}

runRelease();
