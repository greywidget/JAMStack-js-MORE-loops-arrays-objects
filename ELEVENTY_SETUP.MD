# Eleventy Setup Activities.
This site is created more or less from scrap again. This documentation is to remind myself of the steps involved in installing eleventy (and eleventyNavigation) and integrating with my GitHub repo.

- Create new project directory
- Create src directory (currently I'm setting up eleventy so that all of the source files are under `src` and the site is published under `dits`)
- Create a js subdirectory (of src) for the javascript files.
- Create folder `src/_includes`
- Set up `base.njk` as the main template (in /_includes)
- Create a css directory and inside that a css file.
    - N.B to self, I'm not currently using this, check that it is actually being published and working correctly!
- Create a **.gitignore** file and initialise it with:
```
node_modules
dist
```
- `npm init --y` Creates a new npm package with the default setup
- `npm i --save-dev @11ty/eleventy` Installs eleventy.
- Modify the author in `package.json` if you want.
- `npm i --save-dev @11ty/eleventy-navigation` Installs eleventy.
- Create the eleventy config file `.eleventy.js`
- Create `.eleventy.js` with the following:

```
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(config) {

    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/img");
    config.addPassthroughCopy("src/js");

    config.addPlugin(eleventyNavigationPlugin);

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };

};
```

**The setup in the above file contains things related to both eleventy and eleventy-navigation**

**N.B.** the pass through in the config file for javascript stuff so that anything in the `src/js` folder just gets passed across into the `dist` folder.

- Modify `package.json` replace the "test" script with a couple of others so it looks like:

```
  "scripts": {
    "build": "eleventy",
    "start": "eleventy --serve"
  },
```

You should now be able to run `npm run build` to get your site generated into the `dist` folder.

And you can also now run `npm start` to get eleventy to serve pages.