<img alt="Catnippers Social Club" src="https://github.com/catnippers/catnippers-landing-page/blob/evan/src/images/catnippers_logotype-01%201.png" />

# Ultimate Stack Developer (Frontend)

[![Netlify Status](https://api.netlify.com/api/v1/badges/0526f760-0147-499b-b277-9d3c6b2fd32d/deploy-status)](https://app.netlify.com/sites/ultimatestackdeveloper/deploys) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/54834520d4ca4d8c8eb31083b10bcc23)](https://www.codacy.com/gh/catnippers/ultimate-stack-developer-frontend/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=catnippers/ultimate-stack-developer-frontend&amp;utm_campaign=Badge_Grade)

Created by Tomasz Buga

GitHub: https://github.com/n4bik

LinkedIn: https://www.linkedin.com/in/tomasz-buga-79933886/

mail: `kontakt@tomaszbuga.pl`

## Project Overview
Live Demo: https://ultimatestackdeveloper.netlify.com

**Ultimate Stack Developer** is an application for managing micro-scale blog about whatever you can imagine!

### Tech Stack
Frontend part is based on:

`Angular` framework, as I'm used to working with it, but also it
  enables rapid development for the feature requests in the future.

`GraphQL` client for API queries is a homemade `POST` request generator with `Angular's` basic `HttpClient`

### Key Files Description
`Dockerfile` - this file enables Docker Hub to properly dockerize the app
(this app uses Alpine as a Docker Linux distribution)

`netlify.toml` - this file is being read by the Netlify automatic deployment tool
(synchronized with the GitHub repository)

`nginx.conf` - this file is used by the nginx within the Docker container to set up
its configuration

`styles.scss` - I decided to go with the SCSS standard for this project, and most of it
can be found within the `styles.scss` file

### API & CORS (Cross-Origin-Resource-Sharing) Handling

Backend of the UltimateStackDeveloper app uses the CORS to secure API requests made by browsers and narrows it down
to `https://ultimatestackdevleoper.netlify.app` by default (as it is the production server address).

## Getting started
### Prerequisites
`Angular CLI` (https://angular.io/docs)

`NodeJS` (https://nodejs.org/en/)

`Ultimate Stack Developer Backend` (https://github.com/catnippers/ultimate-stack-developer-backend)

### Cloning repository and installation
Launch `Terminal.app` and navigate (using `cd` command) to directory, where you'd like to store your copy of the source code

Use the `git clone https://github.com/catnippers/ultimate-stack-developer-frontend.git` command to clone the repository to your local directory

Navigate (using `cd` command) to the root directory of the project (basically - it's where the `package.json` file is located)

Run the `npm install` in order to download all the required dependencies to your project's directory (this process should create `node_modules` folder)

### Running application on local server
Make sure that you've set proper backend connection setting inside of `graphql.service.ts` & `login.service.ts` files (backend part of the `UltimateStackDeveloper` is available at https://github.com/catnippers/ultimate-stack-developer-backend)

Launch `Terminal.app` and navigate (using `cd` command) to the project's directory

Use the `npm start` command to launch the `start` script from the `package.json` file (this is basically using the `Angular CLI`'s `ng serve` command which can be useful, if you'd like to add additional `Angular CLI`'s run parameters)

App should be available at `http://localhost:4200`
