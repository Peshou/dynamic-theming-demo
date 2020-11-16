# Angular Dynamic Theming Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Quick notes
This application creates the theme colors dynamically from a given configuration.

The configuration for this project has been defined in `src/app/default-theme.ts`. You can change the values there and play around with the colors.

In the `AppModule` we provide an `APP_INITIALIZER` DI Token, and load some theme configuration. We can load the theme from HTTP, storage, in-memory. We then set up the theme variables and attach them to the `<html>` tag of the application.

The variable set up is done in `src/app/theming.service.ts`.

We then use SCSS variables to capture these CSS variables and we use the variables everywhere we need to.

By defining primary/accent/warn colors, we also update the material design theme, and the material design color is generated dynamically.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

