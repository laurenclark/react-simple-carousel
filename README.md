[![Netlify Status](https://api.netlify.com/api/v1/badges/44efd8c4-693c-4c83-9ca5-ce9080963a50/deploy-status)](https://app.netlify.com/sites/react-simple-carousel/deploys)

# React Simple Image Carousel/Slideshow 🎠

View it here -> https://react-simple-carousel.netlify.app/

A basic carousel component which uses:
  - PostCSS, PostCSS Nesting
  - Autoprefixer
  - Create React App
  - React Hooks

You can use your own images, replace the slide-images.js array with your own image data and place the images inside `public/assets/images` and your image data (alt text, filename, id) inside `/src/components/Carousel/slide-images.js`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

I've replaced the usual `yarn start` command with one which watches css changes too.

### `yarn start-js`

The regular `yarn start` that ships with create-react-app this just watches for JS.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn watch:css`

Watches and compiles PostCSS

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

I've changed `yarn build` to also compile PostCSS if you want the regular build command you can run `yarn build-js` which will just compile js, or `yarn build:css` to just compile css.

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

