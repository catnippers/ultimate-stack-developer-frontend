[![Netlify Status](https://api.netlify.com/api/v1/badges/0526f760-0147-499b-b277-9d3c6b2fd32d/deploy-status)](https://app.netlify.com/sites/ultimatestackdeveloper/deploys)
# Ultimate Stack Developer (Frontend)
### Created by Tomasz Buga

GitHub: https://github.com/n4bik

LinkedIn: https://www.linkedin.com/in/tomasz-buga-79933886/

mail: `kontakt@tomaszbuga.pl`

## Project Overview
Live Demo: https://ultimatestackdeveloper.netlify.com

**Ultimate Stack Developer** is an application for managing micro-scale blog about `whatever you can imagine!`

### Tech Stack
Frontend part is based on:
- `Angular` framework, as I'm used to working with it, but also it
  enables rapid development for the feature requests in the future.

- `GraphQL` client for API queries is a homemade `POST` request generator with `Angular's` basic `HttpClient`

- `Cypress` as the `End-to-end (E2E)` test framework
    - Why not `Protractor`? Because it's going to be removed from `Angular` and I know how to work with `Cypress`)

## Key Files Description
`Dockerfile` - this file enables Docker Hub to properly dockerize* the app
(this app uses Alpine as a default Docker Linux distribution)

`netlify.toml` - this file is being read by the Netlify automatic deployment tool
(synchronized with the GitHub repository)

`nginx.conf` - this file is used by the nginx within the Docker container to set up
its configuration

`styles.scss` - I decided to go with the SCSS standard for this project, and most of it
can be found within the `styles.scss` file

* *to dockerize* - to set up application on the so-called `container`, therefore being able to deploy it, without a
  hustle on any docker-engine based environment (to smooth this process a little more, it's common to deploy
  multiple containers together using the `docker-compose` library)

## API & CORS (Cross-Origin-Resource-Sharing) Handling

Backend of the UltimateStackDeveloper app uses the CORS to secure API requests made by browsers and narrows it down
to `https://ultimatestackdevleoper.netlify.app` by default (as it is the production server address).

### Development Tips
Feel free to modify the `graphql.service.ts` & `login.service.ts` as required

## Upcoming fixes (a.k.a. To-Do List)
1. Add a loader **(DONE - TEMPORARY LOADER IMPLEMENTED)**
2. Fix the state management | implementation of the `NgRx` for state
   management & `RxJS` for the HTTP connection handling (TO DO)
    1. `NgRx` (TO DD)
    2. `RxJs` **(DONE)**
3. Create User handling mechanism (registration/login for the client-side of the app) (TO DO)

~~4. Design and implement a new version of the Client side layout (with rewriting `styles.scss` to `Tailwind` using `@apply`) (TO DO)~~*

5. Introduce entirely keyboard dedicated navigation mode within The Architect (TO DO)
6. Create landing page with Docs section for the UltimateStackDeveloper app (TO DO)

*Point 4 is removed, as the Proof-Of-Concept of the TailwindCSS exposed that it's not well designed for the Angular development (at least out-of-the-box) **Reason:** each small change within styles.scss requires rebuilding the app (which takes approx. 30 seconds). I couldn't find reasonable solution for that issue.

## Getting started
### Run the project
### on macOS:
1. Prerequisites
    - Angular CLI (https://angular.io/docs)
    - NodeJS (https://nodejs.org/en/)
    - UltimateStackDeveloper Backend (https://github.com/catnippers/ultimate-stack-developer-backend)
    

2. Cloning repository and installation
    - Launch `Terminal.app` and navigate (using `cd` command) to directory, where you'd like to store your copy of the source code
    - Use the `git clone https://github.com/catnippers/ultimate-stack-developer-frontend.git` command to clone the repository to your local directory
    - Navigate (using `cd` command) to the root directory of the project (basically - it's where the `package.json` file is located)
    - Run the `npm install` in order to download all the required dependencies to your project's directory (this process should create `node_modules` folder)

3. Running application on a local server
    - Make sure that you've set proper backend connection setting inside of `graphql.service.ts` & `login.service.ts` files (backend part of the `UltimateStackDeveloper` is available at https://github.com/catnippers/ultimate-stack-developer-backend)
    - Launch `Terminal.app` and navigate (using `cd` command) to the project's directory
    - Use the `npm start` command to launch the `start` script from the `package.json` file (this is basically using the `Angular CLI`'s `ng serve` command which can be useful, if you'd like to add additional `Angular CLI`'s run parameters)

### Deploy the project
Running application on a docker container (TBA)

Deployment of the app to a Netlify server (TBA)

### on Windows: (TBA)
### on Linux: (TBA)
## Versions
`Node.js` - `12.16.3` (version used in the Dockerfile: `12.7`)

`Angular CLI` - `11.2.9`

`Nginx` (used in the Dockerfile) - `1.17.1`



