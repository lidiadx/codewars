# codewars
A place to solve and test some codewar challenges


## Environment
This environment is based on the javascript exercises testing environment used in [The Odin Project](https://github.com/TheOdinProject/javascript-exercises#readme). It uses: 
   - **NPM** 
   - **Jest** run `npm install` to install Jest and set up the testing platform based on our preconfigured settings.

## Testing
 `cd challengeName` in the terminal and run `npm test challengeName.spec.js`. This should run the test file and show the output.

 For example `cd 01_helloWorld` and run `npm test helloWorld.spec.js`. 

**Note**: Due to the way Jest handles failed tests, it may return an exit code of 1 if any tests fail. NPM will interpret this as an error and you may see some `npm ERR!` messages after Jest runs. You can ignore these, or run your test with `npm test exerciseName.spec.js --silent` to supress the errors.


## Debugging

Debugging is best done in the Visual Studio Code debugger terminal. Click "Run and Debug" icon on the left or press `ctrl + shift + D`, then click JavaScript Debug Terminal. You will be able to set breakpoints as you would in the Chrome DevTools debugger. You can run `npm test challengeName.spec.js` to then execute your code up until your breakpoint and step through your code as necessary. **NOTE**: To take advantage of the debugger, you **MUST** run the script in the debugger terminal, not the bash or zsh terminal.

