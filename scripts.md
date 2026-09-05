# Automatic

## Regenerate from latest CLI

1. Manually delete all files other than:
    * `scripts.md` (this file)
    * `.github/` (helpers to detect changes from version to version)

2. Install latest cli
    ```sh
    npm install -g @angular/cli@latest
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
npm install @angular/animations@latest @angular/common@latest @angular/compiler@latest @angular/core@latest @angular/forms@latest @angular/platform-browser@latest @angular/router@latest --save
npm install @angular/build@latest @angular/cli@latest @angular/compiler-cli@latest --save-dev

```