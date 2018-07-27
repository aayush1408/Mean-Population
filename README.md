# Mean-Population

## How to run locally?

* Clone repo and `cd` into it.
* Run `npm i` to install dependencies.
* Create a config folder and create an index.js file
* Run `npm start` to run development server(:heart: nodemon)

## Structure of config/index.js

```
module.exports = {
    mongoURI: process.env.mongoURI || 'your_mlab_url'
}
```
