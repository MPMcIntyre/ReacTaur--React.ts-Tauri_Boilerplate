<div align="center">
<img src="https://github.com/MPMcIntyre/ReacTaurLogo/blob/main/ReacTaurLogo.png?raw=true" width="55%">
</div>
  
# Introduction

## Create desktop apps for:

- [x] Windows
- [x] MacOS
- [x] Linux

with one sourcecode, powered by Tauri!

This is a simple setup to get started with React and Tauri in Javascrip. If you fancy Javascript, you can find it at [ReacTaur_ReactJS-Tauri-Boilerplate](https://github.com/MPMcIntyre/ReacTaur_ReactJS-Tauri-Boilerplate).

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the typescript template, thus if you are familiar with most React.ts apps, you should have a foothold.

# Getting Started

Ensure that you have visited [Tauri's](https://tauri.studio/en/docs/getting-started/intro) website and installed the following:

- [x] System Dependencies
- [x] Node.js Runtime and Package Manager
- [x] Rustc and Cargo Package Manager
- [x] WebView2 (Windows) or WSL Version 1 & 2 (Linux)

If you have met all the dependancies for your operating system and have successfully cloned the Git repo, cd into the directory and run "yarn install" or "npm install" to install dependancies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

(React and Tauri) Runs React and Tauri concurrently in development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start:server`

(React) Runs React in development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `yarn start:tauri`

(Tauri) Runs Tauri in development mode on [http://localhost:3001](http://localhost:3001).\

### `yarn build`

(React) Builds the app for production to the `./build/` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.\

This does NOT include Tauri!

### `yarn package`

(React and Tauri) Runs the React build command then builds the Tauri app with the contents found in the './build/' folder.\
This produces the 'target' folder in './src-tauri/', which contains both the executable an installer.

### `yarn package:tauri`

(Tauri) Builds the Tauri app with the contents found in the './build/' folder.\
This produces the 'target' folder in './src-tauri/', which contains both the executable an installer.

### `yarn tauri`

(Tauri) Interfaces with the Tauri CLI (@tauri-apps/cli package).\
See the [CLI](https://tauri.studio/en/docs/api/config#tauri) section for more information.

### `yarn test`

(React) Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Learn More

## Tauri

### Tauri patterns

Check out Tauri's dedicated list on [Tauri Patterns](https://tauri.studio/en/docs/usage/patterns/about-patterns).\ It is intuitive and explains the execution process of the app you might want to build.\

You can learn more abaot Tauri and the awesome tool they are developing at their [website](https://tauri.studio/en/docs/getting-started/intro)

## React.js

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
