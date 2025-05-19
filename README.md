Take a look at other branches for different framework usages.

### setup

After checking out a branch, reset the hidden files/dirs like nodemodules,dist... :

`npm run reset`

Refer to `package.json` scripts section for how to startup the app.

### notes

* For local development/auto reload (`npm run dev`), cache control headers set in getserversideprops are overriden by next in non production mode.