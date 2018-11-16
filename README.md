# test-npm-webpack-babel

> From plain HTML and JS to using a package manager to automatically download 3rd party packages, a module bundler to create a single script file, a transpiler to use future JavaScript features, and a task runner to automate different parts of the build process.<br/><br/> > https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70

# step

1. Using a JavaScript the "old-school" way
2. Using a JavaScript package manager (npm)

- \$ npm init
- \$ npm i moment

3. Using a JavaScript module bundler (webpack)

- \$ npm i --save-dev webpack webpack-cli
- \$ ./node_modules/webpack/bin/webpack.js index.js --mode=development

4. Using a JavaScript module bundler (webpack)

- add webpack.config.js, add {scripts:{build, watch}} into package.json
- \$ npm run build

5. Transpiling code for new language features (babel)
6. Using a task runner (npm scripts)
