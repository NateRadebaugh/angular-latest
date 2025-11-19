# AngularLatest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Static Site Generation (SSG)

This application is configured to generate a fully static site at build time without any client-side JavaScript. The build process:

1. Pre-renders all routes at compile time
2. Inlines critical CSS
3. Removes all JavaScript from the final HTML output

The result is a blazing-fast, JavaScript-free static site that can be deployed to any static hosting service.

## Building for Production

To build the static site, run:

```bash
ng build
```

This will:
- Build the application with Angular's application builder
- Pre-render all routes as static HTML
- Remove JavaScript from the prerendered output
- Place the static files in `dist/angular-latest/browser/`

The output is ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Testing the Production Build

To test the production build locally, you can use any static file server. For example:

```bash
npx http-server dist/angular-latest/browser -p 8080
```

Then open your browser to `http://localhost:8080/`

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
