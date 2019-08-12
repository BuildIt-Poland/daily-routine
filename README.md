![Daily Routine - Daily Scrum Absurd Answers](https://user-images.githubusercontent.com/20565536/59495052-d1ed4980-8e8e-11e9-9dc9-e8fe0d037469.png)

[![CircleCI](https://circleci.com/gh/BuildIt-Poland/daily-routine/tree/master.svg?style=svg)](https://circleci.com/gh/BuildIt-Poland/daily-routine/tree/master)
[![codecov](https://codecov.io/gh/BuildIt-Poland/daily-routine/branch/master/graph/badge.svg)](https://codecov.io/gh/BuildIt-Poland/daily-routine)

> An artificial intelligence dedicated to generating absurd and useful daily meeting quotes for endless enrichment of pointless developers existence.

Check the [live version of Daily Routine](https://dailyroutine.buildit.digital/) app!

# Getting started

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

# Contributing

We welcome all forms of **contribution**! Whether you have a specific fix :wrench: or feature in mind, or maybe just want to help out – we'd love to hear from you! :muscle:

Please direct all bug reports :bug:, feature requests :pray: or other feedback to project's [GitHub issues](https://github.com/BuildIt-Poland/daily-routine/issues). This allows us to effectively review, triage and prioritise any incoming work.

*Daily Routine* is a collection of absurd and funny, yet still realistic quotes. The more quotes, the better experience – let your imagination go wild! For **quotes contributions**, please follow the [quotes contribution guidelines](#loudspeaker-quotes-contribution) :loudspeaker:. 

If you want to make **code contribution**, please follow the [code contribution guidelines](#computer-code-contribution) :computer:.

## :loudspeaker: Quotes contribution

Quotes are the *core* component of our application. There are a few general rules on how to add new quotes or change the existing ones.

All quotes are located in [/src/quotes/quotes.js](https://github.com/BuildIt-Poland/daily-routine/blob/master/src/quotes/quotes.js) file.

### Quotes structure & grammar

There are two types of quotes:

* `PREFIX_QUOTES` – generic beginning of the sentence in *past* or *future* tense, related to *action* each character could take (`BRAG` and `CONFESS`)
* `(DEVOPS|FRONTEND|BACKEND)_QUOTES` – essence of the quote, full of technical jargon for particular *role* (`DEVOPS`, `FRONTEND` or `BACKEND`); past is usually *past simple* or *present perfect*, while future is in *future simple*

Typical quote structure: **`PREFIX_QUOTES[ACTION][PAST] + (DEVOPS|FRONTEND|BACKEND)_QUOTES[PAST] + PREFIX_QUOTES[ACTION][FUTURE] + (DEVOPS|FRONTEND|BACKEND)_QUOTES[FUTURE]`**

### Adding new quote

**Simply append new quote to the lists. You do not have to keep the lengths of the arrays equal!**

Please make sure that your quote **branch** is named correctly. Start with type of PR (*quote*) followed by a slash and very short description at the end. For instance: `quote/devops-past-jenkins-image-build`.

Once you are ready to issue *pull request*, use [appropriate PR template](https://github.com/BuildIt-Poland/daily-routine/blob/master/.github/pull_request_template.md). For example:

```text
# [QUOTE] DEVOPS PAST

## Quote
`completed fixing ingress path aliasing in periodically scheduled jobs.`

## Additional comments (optional)
Accurately describes devops existential crisys.
```

Quote PR will be reviewed and either merged into `master`, or additional changes will be requested. Only do one quote per branch. If you are working on several quotes in parallel, create separate branches for each.

### Quotes merge rules

* every contributor can vote with 👍 or 👎
* quote *pull request* needs at least 51% of 👍 votes to be merged
* pull request will be approved and merged after successful voting ✅

## :computer: Code contribution

### Branching strategy

The `master` branch always holds the most recent code and should always be in a releasable state.

Our build and deploy pipeline is configured to automatically build every commit on the `master` branch and deploy it to production. :white_check_mark:

Contributors making changes or adding new features should always create a **feature branch** off of the current `HEAD` of `master`. These are short-lived branches that are deleted once the feature is complete and has been merged.

Do only one feature per branch.

### Adding feature / bugfix

Start by creating a [GitHub issue](https://github.com/BuildIt-Poland/daily-routine/issues) with an overview of proposed changes / bug fixes.

Once ready for review, push feature branch and raise *pull request*.

Please make sure that your **branch** name is correct. Start with type of PR (*feature/fix/chore*) followed by a slash, followed by *GitHub issue ID* and a very short description at the end. For example: `feature-107/robot-expressions`.

For the *pull request* title use **GitHub ID** in brackets followed by short description: `[107] Robot expressions`. Put short summary of your contribution in a description field, complete checklist and in case of *components* attach an example screenshot. For instance:

```
# [107](https://github.com/BuildIt-Poland/daily-routine/issues/107) Robot expressions

## Description
Added various robot character expressions

## Screenshots
![uber-robot.jpg](`example screenshoot URL`)

## Checklist
- [x] Created robot sad, confused and confident poses
- [x] Robot could be female too
- [x] Added common types and constants for gender and character moods
- [x] Configured brag and confess routes for backend
```

### Coding style

Few simple rules (prettier and linter takes care of the rest):

* use regular **function()** instead of **arrow functions** at the top level (applies for functional components as well)
* use **arrow functions** for anonymous functions
* for targeting components directly in tests (e2e and unit) use **data-testid** property, for example: `<button data-testid="forontend-role-button">Front End Developer</button>`
* follow TODO comments with @ symbol and your GitHub handle, for instance: `// TODO Implement something important @myhandle`
* separate external and internal imports with new line
* keep your imports order correct – the higher a file is in directory structure, the higher on the list it should be:

```js
import React from 'react';
import PropTypes from 'prop-types';

import Headline from '../../Headline';
import { SugarCat } from './Characters';
```
