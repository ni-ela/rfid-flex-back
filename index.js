const express = require('express');

const server = express();
server.use(express.json()); 

const follow_ups = []; 

server.get('/follow-up', (req, res) => {
    return res.json(follow_ups);
})

server.get('/follow-up/:index', (req, res) => {
    return res.json(req.follow_ups);
})

server.post('/follow-up', (req, res) => {
    const { model } = req.body;
    follow_ups.push(model);
    return res.json(follow_ups); 
})

server.put('/follow-up/:index', (req, res) => {
    const { index } = req.params; 
    const { model } = req.body;
    
    follow_ups[index] = model; 

    return res.json(follow_ups);
});

server.delete('/follow-up/:index', (req, res) => {
    const { index } = req.params; 
    
    follow_ups.splice(index, 1); 
    
    return res.send();
});

server.listen(3000); 