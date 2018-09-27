## Features

- Live reload in development
- Webpack
- Sass compilation (and minification/autoprefixing in production)
- ES6+ transpilation (and minification/uglyfication in production)

## Usage

- Install dependencies

```
npm install
```

- Run development server

```
npm run dev
```

Will open your default browser to http://localhost:8080/public

Webpack will watch for changes in the `./src` directory and output the bundled assets to `./public/assets`. In parellel, the development server will watch for changes in the `./public` directory and live reload the browser.

- Build production bundles

```
npm run build
```

Will compile, minify and autoprefix Sass to CSS. Will Minify and uglify JavaScript and output the bundled assets to `./public/assets`.

After building for production you can take the `./public` directory and deploy it.
