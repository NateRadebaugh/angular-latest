# Automatic

## Regenerate from latest CLI

1. Manually delete all files other than:
    * `scripts.md` (this file)
    * `.github/` (helpers to detect changes from version to version)

2. Install latest cli
    ```sh
    npm install -g @angular/cli@13
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
npm install @angular/animations@13 @angular/common@13 @angular/compiler@13 @angular/core@13 @angular/forms@13 @angular/platform-browser@13 @angular/platform-browser-dynamic@13 @angular/router@13 @angular-devkit/build-angular@13 @angular/cli@13 @angular/compiler-cli@13 --force

```