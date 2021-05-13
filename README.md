# Let's get spicy

**Let's get spicy** is an application for getting some paragraphs and show top of frequent words in a histogram, characters count and words count.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Before start

### Add environment variables

In order to run the application, create the `.env` file to add the environment variables.

For easy creation, duplicate the `.env.sample` file and rename it.

```
.env.sample -> .env
```

| Name          | Description                |
| ------------- | -------------------------- |
| REACT_APP_API | URL to get the information |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Computational complexity of the word frequency counting algorithm.

The algorithm complexity is O(n) because functions such as replace, split, join, map and reduce have Complexity **n**. take into account that the sort method according to the EcmaScript specification has a complexity **n**. Check the wordFrecuencyCounting function in src/containers/home for a better explanation.\
\
Take in mind: using other sort algorithms, the complexity could vary between **nlog(n)** or **n²**, and the algorithm complexity could change to **n²**.
