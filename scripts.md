# Automatic

## Regenerate from latest CLI

1. Manually delete all files other than:
    * `scripts.md` (this file)
    * `.github/` (helpers to detect changes from version to version)

2. Install latest cli
    ```sh
    npm install -g @angular/cli@next
    ```

3. Go up a level and regenerate to the `angular-latest` dir:

    ```sh
    ng new angular-latest
    ```

    * `Would you like to user SSR?` **N**
    * `Which stylesheet format would you like to use?` **SCSS**

# Manual

## Install latest angular versions

```sh
npm install @angular/animations@next @angular/common@next @angular/compiler@next @angular/core@next @angular/forms@next @angular/platform-browser@next @angular/platform-browser-dynamic@next @angular/router@next  --save --force
npm install @angular-devkit/build-angular@next @angular/cli@next @angular/compiler-cli@next --save-dev --force

```