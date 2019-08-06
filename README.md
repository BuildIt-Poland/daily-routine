![Daily Routine - Daily Scrum Absurd Answers](https://user-images.githubusercontent.com/20565536/59495052-d1ed4980-8e8e-11e9-9dc9-e8fe0d037469.png)

[![CircleCI](https://circleci.com/gh/BuildIt-Poland/daily-routine/tree/master.svg?style=svg)](https://circleci.com/gh/BuildIt-Poland/daily-routine/tree/master)
[![codecov](https://codecov.io/gh/BuildIt-Poland/daily-routine/branch/master/graph/badge.svg)](https://codecov.io/gh/BuildIt-Poland/daily-routine)

> An artificial intelligence dedicated to generating absurd and useful daily meeting quotes for endless enrichment of pointless developers existence.

Check the [live version of Daily Routine](https://dailyroutine.buildit.digital/) app!

## Getting started

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

## Contributing

We welcome all forms of contribution! Bugs reports :bug:, feedback and feature requests :pray: can be just as valuable as code contributions!

Please direct all bug reports :bug:, feature requests :pray: or other feedback to project **Github Issues**. This allows the Daily Routine maintainers to effectively review, triage and prioritise any incoming work.

If you want to make code contributions, please follow the code contribution process :computer:. Whether you have a specific fix :wrench: or feature in mind already, or if you have spare time and just want to help out - we'd love to hear from you! :muscle:

If you want to make quotes contributions, please follow the quotes contribution process. Daily routine is a collection of absurd and funny, but still realistic quotes. The bigger amount of quotes, the better experience will be – let your imagination go wild! :dizzy:


### :loudspeaker: Quotes contribution

Daily Routine is the tool for generating meeting quotes for confused IT employees :confused:, and quotes are the core element of our application. To make it more accurate, diverse and topical for IT industry we decided to open our quotes source for contribution :ok_hand:. In below section, you will find guides and rules on how to add new quotes or change the existing ones. We tried to make this process as easy as we could, to allow contribution also for non tech people. If you have any feedback regarding our quotes contribution process, please let us know.

So lets go!

To extend quote collection, edit file: `/src/quotes/quotes.js`
Inside the file you will notice two types of quotes: `const PREFIX_QUOTES` and `const (DEVOPS|FRONTEND|BACKEND)_QUOTES`.
**Simply append one of the lists. Please take a look at how sentences are constructed both structurally and grammatically.**
*You can just append to FRONTEND or perhaps provide new PREFIX, you do not have to keep the lengths of arrays equal.*

Structure of sentences: **`PREFIX_QUOTES(PAST) + (DEVOPS|FRONTEND|BACKEND)_QUOTES(PAST) + PREFIX_QUOTES(FUTURE) + (DEVOPS|FRONTEND|BACKEND)_QUOTES(FUTURE)`**

Grammar of sentences:
**PREFIX_QUOTES** contain beginings(past) and continuations(future) of the sentences and define the character(brag or confess).
**(DEVOPS|FRONTEND|BACKEND)_QUOTES** contain actions and objects of actions for a particular role. Past is usually past simple or present perfect, while future is in future simple verb tense.

Please make sure that your quotes **branch** names are correct. Start with type of PR (*quote*) followed by a slash and very short description at the end. For example:

```text
quote/devops-past-jenkins-image-build
```

Once you are ready to add your quote to our app, use one of the below pull request templates

For Prefix Quote:

```text
[QUOTE] PREFIX BRAG/CONFESS PAST/FUTURE

Quote:
`Sadly yesterday I have not`

Additional comments (optional):
`Additonal explanation for your quote`
```

For Roles Quote:

```text
[QUOTE] ROLE DEVOPS/BACKEND/FRONTEND PAST/FUTURE

Quote:
`completed fixing ingress path aliasing in periodically scheduled jobs.`

Additional comments (optional):
`Additonal explanation for your quote`
```

The maintainers will then review the Quote PR and either merge into master (and then delete that feature branch), or request additional changes. Only do one quote per branch. If you are working on several quotes in parallel, create separate branches for each.

### :computer: Code contribution

#### Branching strategy

The `master` branch always holds the most recent code and should always be in a releasable state (i.e. all commits that get merged into master have build cleanly, pass tests and have been peer-reviewed).

Our build and deploy pipeline is configured to automatically build every commit on the master branch and deploy it to production. :white_check_mark:

Contributors making changes or adding new features should always create a feature branch off of the current **HEAD** of master. These are short-lived branches that are deleted once the feature is complete and has been merged.

Only do one feature per branch. If you are working on several things in parallel, create separate branches for each.

#### Issuing PR

Once ready for review, the feature branch should be pushed to this Github repo and a pull request should be raised.

The maintainers will then review the PR and either merge into master (and then delete that feature branch), or request additional changes.

Please make sure that your **branch** names are correct. Start with type of PR (*feature/fix/chore*) followed by a slash, followed by Github issue ID and a very short description at the end. For example:

```text
feature-107/robot-expressions
```

For the *pull request* title use **Github ID** in brackets followed by short description: `[107] Robot expressions`. Put short summary of your contribution in PR's description field, add link to the Github issue, checklist, and in case of *components* attach an example screenshot. For example:

```
[107](https://github.com/BuildIt-Poland/daily-routine/issues/107) Example Pull Request

# Description
Short pull request summary

# Screenshots:
![Screenshot 2019-06-14 at 15 52 50](`Example screenshoot URL`)

# Checklist
- [x] Created robot sad, confused and confident poses
- [x] Robot could be female too
- [x] Added common types and constants for gender and character moods
- [x] Configured brag and confess routes for backend
- [x] Added start:build script to test production version locally
```

#### Coding style

Please follow a few simple rules (prettier and linter takes care of the rest):

* use regular **function()** instead of **arrow functions** at the top level (applies for functional components as well)
* use **arrow functions** for anonymous functions
* for targeting components directly in tests (e2e and unit) use **data-testid** property, for example: `<button data-testid="forontend-role-button">Front End Developer</button>`
* follow TODO comments with @ symbol and your GitHub handle, for instance: `// TODO Implement something important @myhandle`
* separate external and internal imports with new line
* keep your imports order correct -- the higher a file is in directory structure, the higher on the list it should be:

```js
import React from 'react';
import PropTypes from 'prop-types';

import Headline from '../../Headline';
import { SugarCat } from './Characters';
```
