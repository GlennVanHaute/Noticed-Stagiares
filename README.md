# NOTICED GULP

## INSTALLATION

### First time only

Make sure you have nodeJS installed.
http://nodejs.org/

After you have installed nodeJS, you can go and install gulp globally with following command:

```(sudo) npm install gulp -g```

Also install Bower globally:

```(sudo) npm install bower -g```


### Normal installation

Download this repository and extract the contents into your theme folder.

*IMPORTANT: *Move the contents of the extracted folder (typically 'noticed-gulp-master') into the parent folder (the root of your theme).

Now, open your terminal and go to your used theme folder and run following command to install all necessary node modules referenced in package.json file:

```(sudo) npm install```

Also get the bower components for susy(grid) and breakpoint-sass from the bower.json file.

```(sudo) bower install```

All your sass files will be compiled in the assets/css folder, so don't forget to add this to your theme settings.

## USING GULP

Tell Gulp to watch for changes

```gulp watch```
