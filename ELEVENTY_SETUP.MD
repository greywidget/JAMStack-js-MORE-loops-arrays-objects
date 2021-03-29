# Eleventy Setup Activities.
This site is created more or less from scrap again. This documentation is to remind myself of the steps involved in installing eleventy (and eleventyNavigation) and integrating with my GitHub repo.

## Setup Steps
- Create new project directory
- Create src directory (currently I'm setting up eleventy so that all of the source files are under `src` and the site is published under `dist`)
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

- Create `src/_includes/base.njk` with bootstrap, navigation and template for main content (see previous projects for an example)
- Create additional pages

You should now be able to run `npm run build` to get your site generated into the `dist` folder.

And you can also now run `npm start` to get eleventy to serve pages.

## Deploying
- Initialise the Repo: `git init`
- Add our files: `git add .`
- Commit them: `git commit -m "Initial Version"`

## Setting it up on GitHub
- Create the Repo (jamstack-build-with-api-data) on GitHub
- Add the remote: `git remote add origin https://github.com/greywidget/my-project.git`
- Push the master branch to GitHub: `git push -u origin master`

## Linking to Netlify
- Go to Netlify Home and login.
- Under Sites or Team Overview, click on the `New site from Git` button.
- Click on the `GitHub` button and use the search button to find the repo.
- If you can't see the repo, click the `Configure Netlify on GitHub` button. This will take you to a Netlify Page in GitHub where you can give Netlify access to all Repos or individual ones. You might need to scroll down to see the Repository access panel.
- Not that when you return from GitHub to continue configuring the deployment in Netlify, you need to change a couple of settings to match how we have set this project up. 
    - Set the *Build command* to `npm run build`
    - Set the *Publish directory* to `dist`
- Click the `Deploy site` button.