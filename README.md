
## Grunt > Integrated Development (AEM) > Watch JS/SCSS/TXT/HTML changes, publish to Sling
# 
***
### Purpose
To ease FE development on AEM projects when FE/BE is working in an integrated codebase and all local build/automation tasks are handled by Maven and NOT a FE build/automation tool.

### Why You Might Want This
You would like to avoid forcing a Maven build for every change to a CSS/JS/HTML file but desire to keep the integrity/clarity of a one-build solution.

Why would you have to force a Maven build on these FE files?

1. Your project is AEM and FE/BE are working in an integrated environment
2. AEMs clientlibs are being utilized for automatic concatentation and minification of CSS/JS files
3. You have one build system to cover both FE and BE
4. You're using SASS

_As a reminder, even if #3 wasn't in play and you wanted to manage front-end builds/tasks with Grunt/Gulp, you still **would not** be able to push FE changes to the clientlib directory as AEM caches these files when initially generated._

### Local Setup

1. Copy files to root of your project directory (same level as /AEM/ webapp directory). Note the included .gitignore file.
2. Install package > npm install
3. Change paths if required (see below)
4. sudo grunt

Grunt is now watching for file changes to push to AEM/Sling.

### What Exactly Does This Do?
* JS
	* JS is developed in partial files within the /js/ folder in the /clientlib-site/ directory. The JS files here, as well as the third-party libraries within /clientlib-depenedncies/, are individually pushed to AEM/Sling when each file is modified. AEM subsequently concatenates, minifies and renders.
* CSS
	* This script assumes SASS. As such, each partial SCSS file is developed within the /css/ folder inside the clientlib-site directory. These partial files are individually imported into a file called styles.scss, compiled into a temporary 'styles.css' file in the root of the /clientlib-site/ folder and pushes this to Sling. _It's important to note that Maven follows the exact same process to get these files to Sling._
* TXT
	* In order to preserve a specific load order of JS files, js.txt in the root of /clientlib-site/ is used to define the concatenation order of each partial JS file
* HTML
	* AEM components are HTML files which, like the clientlib files are cached by AEM. As such these files are also watched and pushed to AEM/Sling when modified.

### What You Will Need to Modify
**Paths**
* 'dependencies' points to your /clientlib-dependencies/ within /clientlib/. This is for 3rd party JS dependencies.
* 'site' points to your /clientlib-site/ for all custom CSS/JS
* 'libroot' points to the root of the /clientlib/ folders
* 'html' points to the root of the /components/ directory where all component markup resides

### What You Might Need to Modify
* **Anything that doesn't map back to your Maven solution**. The most important requirement that this script adheared to was following the same processes that Maven/AEM are following. Grunt isn't required to Maven/AEM and vice versa. They are not following different processes to achieve the same effect. They are doing the _exact_ same thing. As such, adding this script to your AEM project requires _up-front_ planning and coordination with your BE lead.

