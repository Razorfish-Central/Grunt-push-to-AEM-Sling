
## Grunt > Integrated Development (AEM) > Watch JS/CSS/TXT/HTML changes, publish to Sling
# 
***
### Purpose
To ease FE development on AEM projects when FE/BE is working in an integrated codebase and all local build/automation tasks are handled by Maven and NOT a FE build/automation tool.

### Why You Might Want This
You would like to avoid forcing a Maven build for every change to a CSS/JS/HTML file. Why would you have to force a Maven build?

1. Your project is AEM and FE/BE are working in an integrated environment
2. AEMs clientlibs are being utilized for automatic concatentation and minification
3. Your team desires one build system to cover both FE and BE
4. Your FE team wants a watch task to monitor FE file changes and push changed files on the fly

As a reminder, even if #3 wasn't in play and you wanted to manage front-end builds/tasks with Grunt/Gulp, you would still not be able to push FE changes to the clientlib directory as AEM caches these files when initially generated. 

### Local Setup

1. Copy files to root of project directory (beside AEM webapp directory). Note the included .gitignore file.
2. Install package > npm install
3. Change paths if required (see below)
4. sudo grunt

### What Exactly Does This Do?
1.
2.
3.

### What You Might Need to Modify
**Paths**
* 'dependencies' points to /clientlib-dependencies/ in the clientlib folder. This is for 3rd party JS dependencies.
* 'site' points to /clientlib-site/ for all custom CSS/JS
* 'libroot' points to the root of the clientlib folders
* 'html' points to the root of the /components/ directory where all component markup resides

**Files pushed to Sling**
* Note the text files. They're for maintaining a specific load order. There are many ways to achieve this.

### Local Dev Environment Build/Run

1. From your working folder, go to the **/src** folder
2. Run Gulp
```
> gulp
```
_* While gulp is running, open a separate terminal window, and run 'node app.js'_
```
> node app.js
```
_* You can now review the index page through [http://localhost:3000/](http://localhost:3000/) in your browser_
