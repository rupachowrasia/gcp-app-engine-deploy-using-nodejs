const Express = require('express');

const app = Express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) =>{
    res.send('Hello from app engine');
})

app.listen(PORT, () =>{
    console.log(`App is listening on port:${PORT}`);
})