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

    * `Would you like to add Angular routing?` **y**
    * `Which stylesheet format would you like to use?` **SCSS**

# Manual

## Install latest angular versions

```sh
npm install @angular/animations@next
npm install @angular/common@next
npm install @angular/compiler@next
npm install @angular/core@next
npm install @angular/forms@next
npm install @angular/platform-browser@next
npm install @angular/platform-browser-dynamic@next
npm install @angular/router@next

npm install @angular-devkit/build-angular@next
npm install @angular/cli@next
npm install @angular/compiler-cli@next
```