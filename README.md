<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/rammazzoti2000/phaser_toolbox">
    <img src="assets/microverse.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Phaser + ES6 + Webpack</h3>

  <p align="center">
    <a href="https://github.com/rammazzoti2000/phaser_toolbox"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/rammazzoti2000/phaser_toolbox/issues">Report Bug</a>
    ·
    <a href="https://github.com/rammazzoti2000/phaser_toolbox/issues">Request Feature</a>
  </p>
</p>

# Phaser 3 Webpack Project Template

A Phaser 3 project template with ES6 support via [Babel 7](https://babeljs.io/) and [Webpack 4](https://webpack.js.org/)
that includes hot-reloading for development and production-ready builds.

Loading images via JavaScript module `import` is also supported.

## Clone
* [download](https://github.com/rammazzoti2000/phaser_toolbox/archive/development.zip) or clone this repo:
  - Clone with SSH:
  ```
    git@github.com:rammazzoti2000/phaser_toolbox.git
  ```
  - Clone with HTTPS
  ```
    https://github.com/rammazzoti2000/phaser_toolbox.git

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm start`.


After starting the development server with `npm start`, you can edit any files in the `src` folder
and webpack will automatically recompile and reload your server (available at `http://localhost:8080`
by default).

## Customizing Template

### Babel
You can write modern ES6+ JavaScript and Babel will transpile it to a version of JavaScript that you
want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently
targets all browsers with total usage over "0.25%" but excludes IE11 and Opera Mini.

  ```
  "browsers": [
    ">0.25%",
    "not ie 11",
    "not op_mini all"
  ]
  ```

### Webpack
If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can
modify the `webpack/base.js` file for cross-project changes, or you can modify and/or create
new configuration files and target them in specific npm tasks inside of `package.json'.

## Deploying Code
After you run the `npm run build` command, your code will be built into a single bundle located at
`dist/bundle.min.js` along with any other assets you project depended.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`),
you should be able to open `http://mycoolserver.com/index.html` and play your game.

<!-- CONTACT -->
## Contributors

👤 **Alexandru Bangau**

- LinkedIn: [Alexandru Bangau](https://www.linkedin.com/in/alexandru-bangau/)
- GitHub: [@rammazzoti2000](https://github.com/rammazzoti2000)
- E-mail: bangau.alexandru@gmail.com
- Project [Link](https://github.com/rammazzoti2000/phaser_toolbox/)

## :handshake: Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/rammazzoti2000/phaser_toolbox/issues).

## Show your support

Give a :star: if you like this project!


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Photonstorm](https://github.com/photonstorm/phaser3-project-template)
* [Microverse](https://www.microverse.org/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/rammazzoti2000/phaser_toolbox.svg?style=flat-square
[contributors-url]: https://github.com/rammazzoti2000/phaser_toolbox/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rammazzoti2000/phaser_toolbox.svg?style=flat-square
[forks-url]: https://github.com/rammazzoti2000/phaser_toolbox/network/members
[stars-shield]: https://img.shields.io/github/stars/rammazzoti2000/phaser_toolbox.svg?style=flat-square
[stars-url]: https://github.com/rammazzoti2000/phaser_toolbox/stargazers
[issues-shield]: https://img.shields.io/github/issues/rammazzoti2000/phaser_toolbox.svg?style=flat-square
[issues-url]: https://github.com/rammazzoti2000/phaser_toolbox/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
