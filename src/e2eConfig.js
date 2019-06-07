const handler = require('serve-handler');
const { createServer } = require('http');
const { exec } = require('child_process');
const { open, run } = require('cypress');

const server = () =>
  createServer((request, response) =>
    handler(request, response, {
      public: 'build',
      rewrites: [
        {
          source: '**',
          destination: '/index.html'
        }
      ]
    })
  );

const runApp = () => Promise.resolve(exec('react-scripts start'));

const openCypress = baseUrl =>
  open({
    config: {
      baseUrl
    }
  });

const runCypress = () =>
  run().then(({ totalFailed }) => {
    if (totalFailed > 0) {
      process.exit(1);
    }

    process.exit(0);
  });

const e2eRunDev = baseUrl => runApp().then(openCypress(baseUrl));

const e2eRun = (port = 5000) => server().listen(port, runCypress);

module.exports = {
  e2eRun,
  e2eRunDev
};
