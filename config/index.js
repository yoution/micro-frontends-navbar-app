/* global process */

module.exports = (() => {
  const env = process.env.APPENV || "development";

  // for security reason don't let to require any arbitrary file defined in process.env
  if (["production", "development"].indexOf(env) < 0) {
    return require("./development");
  }

  return require("./" + env);
})();
