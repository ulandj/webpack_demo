## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Setting up HtmlWebpackPlugin
`npm install --save-dev html-webpack-plugin`

Before we do a build, you should know that the HtmlWebpackPlugin by default will generate its own index.html file, even though we already have one in the dist/ folder. This means that it will replace our index.html file with a newly generated one.
If you open index.html in your code editor, you'll see that the HtmlWebpackPlugin has created an entirely new file for you and that all the bundles are automatically added.

### Cleaning up the /dist folder
As you might have noticed over the past guides and code example, our /dist folder has become quite cluttered. Webpack will generate the files and put them in the /dist folder for you, but it doesn't keep track of which files are actually in use by your project.

In general it's good practice to clean the /dist folder before each build, so that only used files will be generated. Let's take care of that.

A popular plugin to manage this is the clean-webpack-plugin so let's install and configure it.
`npm install --save-dev clean-webpack-plugin`

Now run an npm run build and inspect the /dist folder. If everything went well you should now only see the files generated from the build and no more old files!

### inline-source-map
When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if you bundle three source files (a.js, b.js, and c.js) into one bundle (bundle.js) and one of the source files contains an error, the stack trace will simply point to bundle.js. This isn't always helpful as you probably want to know exactly which source file the error came from.

In order to make it easier to track down errors and warnings, JavaScript offers source maps, which map your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

There are a lot of different options available when it comes to source maps. Be sure to check them out so you can configure them to your needs.

For this guide, let's use the inline-source-map option, which is good for illustrative purposes (though not for production):

### Using webpack-dev-server
The webpack-dev-server provides you with a simple web server and the ability to use live reloading. Let's set it up:

`npm install --save-dev webpack-dev-server`

This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
Now we can run npm start from the command line and we will see our browser automatically loading up our page. If you now change any of the source files and save them, the web server will automatically reload after the code has been compiled. Give it a try!

