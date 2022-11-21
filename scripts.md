# Automatic

## Regenerate from latest CLI

1. Manually delete all files other than:
    * `scripts.md` (this file)
    * `.github/` (helpers to detect changes from version to version)

2. Install latest cli
    ```sh
    npm install -g @angular/cli@15
    ```

3. Go up a level and regenerate to the `angular-latest` dir:

    ```sh
    ng new angular-latest
    ```

    * `Would you like to add Angular routing?` **y**
    * `Which stylesheet format would you like to use?` **SCSS**

# Manual

## Install latest angular versions

```sh
npm install @angular/animations@15 @angular/common@15 @angular/compiler@15 @angular/core@15 @angular/forms@15 @angular/platform-browser@15 @angular/platform-browser-dynamic@15 @angular/router@15 --save --force
npm install @angular-devkit/build-angular@15 @angular/cli@15 @angular/compiler-cli@15 --save-dev --force

```