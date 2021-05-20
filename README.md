# CypressApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

* used the Angular Schematics to configure the Angular project with Cypress in one command : ng add @briebug/cypress-schematic --addCypressTestScripts
* went ahead and removed protractor
* next after installation, went ahead and updated the spec.ts file under integration folder with simple tests.
* To set up CI, npm install --save-dev start-server-and-test
* Add "e2e:ci": "start-server-and-test start http://localhost:4200 cy:run" to scripts in package.json
* create .github > workflows > cypress-e2e.yml file accordingly

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
