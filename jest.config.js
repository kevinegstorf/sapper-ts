module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "svelte-jest",
  },
  moduleFileExtensions: ["js", "json", "svelte", "ts"],
  coverageReporters: ["html"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
