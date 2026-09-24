// Local-only static server for deterministic browser tests; no runtime dependency.
const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const contentTypes = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript" };

http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const file = path.resolve(root, `.${pathname === "/" ? "/index.html" : pathname}`);
    const contentType = contentTypes[path.extname(file)];
    if (!file.startsWith(`${root}${path.sep}`) || !contentType) {
      response.writeHead(404).end();
      return;
    }
    const body = await fs.readFile(file);
    response.writeHead(200, { "Content-Type": `${contentType}; charset=utf-8`, "Cache-Control": "no-store" });
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
}).listen(8893, "127.0.0.1");
