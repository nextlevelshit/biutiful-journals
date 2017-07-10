![biutiful-logo](https://user-images.githubusercontent.com/10194510/28043034-4b5b380c-65d0-11e7-9369-6834d71645d8.PNG)

# Biutiful Journals

Creating beautifully formated journals with `pandoc`, `Markdown` and `LaTeX`. The included `nodejs` scripts will support you, having a live preview of the compiled PDF file, you are working on.

## Pre-requirements

In the best case you are using a UNIX-like operating system like `macOS` oder `GNU/Linux`. You will need a `LaTeX` compiler like `pdflatex` and `nodejs` installed.

### 1. Get `LaTeX` and `pandoc`

### 2. Get `nodejs`

`nodejs` is the *de facto* standard for server-side JavaScript programming and is used in our case to stay on track of any changes of the `Markdown` files.

- [Install *nodejs* on Ubuntu](https://wiki.ubuntuusers.de/Node.js/)
- [Install *nodejs* on any other operating system (OS)](https://nodejs.org/en/download/package-manager/)

### 3. Get `yarn` (optional, but recommended)

`yarn` is a node dependency manager that works as a substitute for `npm`, the native `nodejs` package manager. `yarn` includes many improved functionality, but is no must-have. You can also install all dependencies without `yarn` and use `npm` instead. All possibilities will be listed below.

- [Install `yarn` on any OS](https://yarnpkg.com/lang/en/docs/install/)

## Installation of `buitiful-journals`



## Usage

### Watch for changes

Starting the *watch script* with `yarn`:

```bash
yarn start

# equivalent to
npm run start
gulp watch
```

Finally it will always start the gulp task `watch`. Inside the `package.json` there is a section with defined scripts to run.

### Compile to PDF

Compile all `Markdown`(.md) files to PDF:

```bash
yarn pdf

# equivalent to
npm run pdf
gulp pdf
```

## Screenshot

![biutiful-journals-screen](https://user-images.githubusercontent.com/10194510/28043249-4c882248-65d1-11e7-8c57-47e322b0e474.png)

For a perfect usage, I recommend `atom` for developement with a  

## Licence

Yeah, it is GPL v2.0. Feel free to use that piece to code!

## Author

I am Michael Czechowski ([www.dailysh.it](http://www.dailysh.it)) web developer from Stuttgart in the deep southern part of Germany. Do not hesitate to contact me: mail@dailysh.it
