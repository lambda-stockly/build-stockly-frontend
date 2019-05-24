## Project Details
This is our buildweek project as Lambda School students for May 20th to may 24th. Students collaborate the entire week to build an application to present to the school at the end of the week, and students are put in roles that correspond to the skillset they have learned.  
This application uses the Alphavantage API and our own backend API to produce information and graphs about current trade stocks.
- https://www.alphavantage.co/
- https://stockly-backend.herokuapp.com/

### Contribute To The Project
- The project can use some UI polishing and just general UX improvement with loaders and color schema. If you wish to contribute and think you can improve on the project, we love all UI/UX developers. 
- Some of the code like `<StockInfo/>` and `<TopSearched/>` need to be refactored to use Redux in some API calls. Refactoring the state to global mangement would improvce our ability to create stunning graphs and user experience.
- This application has a need for many loaders in several areas given the majority of API calls. We've already included [react spinners](https://www.npmjs.com/package/react-spinners) in the project. Just add boolean states to Redux, or if you know a better way to manage loaders, that's great too.
- Consider contributing to our backend. We need more ways to reduce the number of API calls to alphavantage in order to deliver faster and scale.


## Direction For The Future
In the future, we would love to implement even faster loading times for stock data and graphs. This is dependent on our data scientists and backend developers, so please consider contributing to them as well. 




## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
