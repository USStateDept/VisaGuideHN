## Quick Install

 The quickest way to get started with MEAN is to clone the project and utilize it like this:

  Install dependencies:

    $ npm install

  Export the node Path to load your lib into project (default in HEROKU)
    $ export NODE_PATH=lib

  We recommend using [Grunt](https://github.com/gruntjs/grunt-cli) to start the server:
    $ grunt

  When not using grunt you can use:

    $ node server
    
  Then open a browser and go to:

    http://localhost:3000

## Configuration
All configuration is specified in the [config](config/) folder, particularly the [config.js](config/config.js) file. Here you will need to specify your application name, database name, as well as hook up any social app keys if you want integration with Twitter, Facebook, GitHub or Google.

### Environmental Settings

There are three environments provided by default, __development__, __test__, and __production__. Each of these environments has the following configuration options:
* db - This is the name of the MongoDB database to use, and is set by default to __mean-dev__ for the development environment.
* root - This is determined automatically at the start of this file, but can be overridden here.
* app.name - This is the name of your app or website, and can be different for each environment. You can tell which environment you are running by looking at the TITLE attribute that your app generates.
* Social Registration - Facebook, GitHub, Google, Twitter. You can specify your own social accounts here for each social platform, with the following for each provider:
	* clientID
	* clientSecret
	* callbackURL

To run with a different environment, just specify NODE_ENV as you call grunt:

	$ NODE_ENV=test grunt

If you are using node instead of grunt, it is very similar:

	$ NODE_ENV=test node server
