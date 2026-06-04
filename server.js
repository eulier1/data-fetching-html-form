"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const http = (0, node_http_1.createServer)((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>Hello Wordl</title>
    <meta charset="utf-8">
</head>

<body>
    <h1>
        Hello World
    </h1>

    <form>
        <p> <label> Customer name : <input type="text" /> </label> </p>
        <p><label> Telephone : <input type="tel" /> </label></p>
        <p><label> Email Address <input type="email"></label></p>
        <fieldset>
            <legend>Pizza Size</legend>
            <p> <label> <input type="radio" name="size" /> Small </label> </p>
            <p> <label> <input type="radio" name="size" /> Medium </label> </p>
            <p> <label> <input type="radio" name="size" /> Large </label> </p>
        </fieldset>
        <fieldset>
            <legend> Pizza Toppings </legend>
            <p> <label> <input type="checkbox" /> Bacon </label> </p>
            <p> <label> <input type="checkbox" /> Extra Cheese </label> </p>
            <p> <label> <input type="checkbox" /> Onion </label> </p>
            <p> <label> <input type="checkbox" /> Mushroom </label> </p>
        </fieldset>
        <p><label>Preferred delivery time: <input type=time min="11:00" max="21:00" step="900"></label></p>
        <p><label>Delivery instructions: <textarea></textarea></label></p>
        <p><button>Submit order</button></p>
    </form>
</body>

</html>`;
    res.end(html);
});
http.listen(3000, () => {
    console.log("Server is running on port 3000");
});
