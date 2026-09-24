const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const dataScripts = Array.from(fs.readFileSync(path.join(root, "index.html"), "utf8")
  .matchAll(/<script[^>]+src="([^"]+)"/g), match => match[1])
  .filter(file => file.startsWith("js/data/") || ["js/core/namespace.js", "js/core/content.js", "js/core/search.js"].includes(file));

function loadData({ scripts = dataScripts, beforeScript } = {}) {
  const context = { console };
  context.window = context;
  vm.createContext(context);
  scripts.forEach(file => {
    if (beforeScript) beforeScript(file, context);
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
  });
  return context;
}

module.exports = { dataScripts, loadData };
