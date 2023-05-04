# Automatic

## Regenerate from latest CLI

1. Manually delete all files other than:
    * `scripts.md` (this file)
    * `.github/` (helpers to detect changes from version to version)

2. Install latest cli
    ```sh
    npm install -g @angular/cli@16
    ```

3. Go up a level and regenerate to the `angular-latest` dir:

    ```sh
    ng new angular-latest --standalone
    ```

    * `Would you like to add Angular routing?` **y**
    * `Which stylesheet format would you like to use?` **SCSS**

# Manual

## Install latest angular versions

```sh
npm install @angular/animations@16 @angular/common@16 @angular/compiler@16 @angular/core@16 @angular/forms@16 @angular/platform-browser@16 @angular/platform-browser-dynamic@16 @angular/router@16 --save --force
npm install @angular-devkit/build-angular@16 @angular/cli@16 @angular/compiler-cli@16 --save-dev --force

```