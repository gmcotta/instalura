// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

// console.log('Ola mundo');

shell.exec('git diff --name-only branch-scripts-testes..main', { silent: true });

// console.log(resultado.stdout.split('\n'));
