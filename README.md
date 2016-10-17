# PortalUserInfo
## Project Dependencies
#### System Requirements:
- node v6+
- npm v3+
- git

#### Global NPM Requirements:
- ionic
- gulp
- cordova

## Install Ionic 2
- Ionic 2 is built on top of Cordova, a framework that enables development for cross patform apps with HTML, CSS and JavaScript. Make sure you have nodejs installed.
- In mac terninal we have to use prefix "$" in npm
- i.e. $npm install -g cordova

#### Install Cordova
- npm install -g cordova
- For Mac/Linux/Unix users, if you see errors with EACCESS, you can run the command as root user with sudo npm install -g cordova, or just fix your npm persmissions.

#### Install Ionic CLI
- npm install -g ionic

#### Install TypeScript
- npm install -g typescript

## Create Project
- ionic start PROJECTNAME(FOLDER NAME) tutorial --v2 --ts
- i.e ionic start PortalUserInfo tutorial --v2 --ts
- The above command create an ionic project based on a tutorial template ionic provides. It then downloads the necessary npm packages. We'll build the application using TypeScript, and that's why we have a --ts flag.
- Go to the PortalUserInfo directory with cd PortalUserInfo.

#### Run App on browser
- In your terminal/command prompt run : $ionic serve / ionic serve

#### Build and run App on device
- Connect the device to your machine
- Enable unkown source installation in your android device
- Add android platform using ionic platform add android
- In window cmd promp use Ionic run android
- App will be installed in your android device

