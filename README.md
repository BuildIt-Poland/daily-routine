![Daily Routine - Daily Scrum Absurd Answers](https://user-images.githubusercontent.com/20565536/59495052-d1ed4980-8e8e-11e9-9dc9-e8fe0d037469.png)

[![CircleCI](https://circleci.com/gh/BuildIt-Poland/daily-routine/tree/master.svg?style=svg)](https://circleci.com/gh/BuildIt-Poland/daily-routine/tree/master)

> An artificial intelligence dedicated to generating absurd and useful daily meeting quotes for endless enrichment of pointless developers existence.

Check the [live version of Daily Routine](https://dailyroutine.buildit.digital/) app!

## Getting started!
A few easy steps to set up a project:

* Make sure you've got **Node** installed, preferably version above **10**
* Run `npm install` from project root

Most useful scripts for development:

* `npm start` - starts the project in a development mode
* `npm test` - fires up Jest test runner

Other scripts which could be helpful:
* `e2e:dev` - runs all e2e tests locally
* `npm run start:build` -  starts a production version of app locally
* `npm run test:update` - updates all tests' snapshots from scratch
* `npm run format` - formats whole codebase with prettier

## Conventions

### Issuing PR
Please make sure that your **branch** names are correct. For example: `feature/dr-10-robot-expressions` -- start with type of PR (*feature/fix/chore*) followed by a slash, followed by Jira issue ID and a very short description at the end.
For the *pull request* title use Jira ID in brackets followed by short description: `[DR-10] Robot expressions`. Put short summary of your contribution in PR's description field and in case of *components* attach a screenshot.

### Coding style
Please follow a few simple rules (prettier and linter takes care of the rest):
* use regular **function()** instead of **arrow functions** at the top level (applies for functional components as well)
* use **arrow functions** for anonymous functions
* for targeting components directly in tests (e2e and unit) use **data-testid** property, for example: `<button data-testid="forontend-role-button">Front End Developer</button>`
* follow TODO comments with @ symbol and your GitHub handle, for instance: `// TODO Implement something important @myhandle`
* separate external and internal imports with new line
* keep your imports order correct -- the higher a file is in directory structure, the higher on the list it should be:
```
import React from 'react';
import PropTypes from 'prop-types';

import Headline from '../../Headline';
import { SugarCat } from './Characters';
```
