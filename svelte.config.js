// See https://github.com/kaisermann/svelte-preprocess#with-svelte-vs-code
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    // ...svelte-preprocess options (optional)
  }),
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: false,
        debug: false,
        compilerOptions: {},
        rootMode: "",
      },
    ],
  },
  // ...other svelte options (optional)
};
