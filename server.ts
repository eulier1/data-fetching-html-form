import { createServer } from "node:http";

const http = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

  const html = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>Hello Wordl</title>
                </head>
                <body>
                    <h1>
                        Hello World
                    </h1>
                </body>
                </html>`;

  res.end(html);
});

http.listen(3000, () => {
  console.log("Server is running on port 3000");
});
