import { createServer } from "node:http";

const http = createServer( (req  ,res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
} )

http.listen(3000, () =>{
    console.log('Server is running on port 3000')
})