// const express = require('express');
// const next = require('next');
// const compression = require('compression');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//     const server = express();

//     // Enable compression middleware
//     server.use(compression());

//     server.all('*', (req, res) => {
//         return handle(req, res);
//     });

//     const port = process.env.PORT || 3000;
//     server.listen(port, (err) => {
//         if (err) throw err;
//         console.log(`> Ready on http://localhost:${port}`);
//     });
// });