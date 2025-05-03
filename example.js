const express = require('express');
const bodyParser = require('body-parser');
const mineflayer = require('mineflayer');

const app = express();

const port = 3000;

app.use(bodyParser.json());

const bot = mineflayer.createBot({   
  host: 'kaboom.pw',
  port: 25565, 
  username: 'ComBot',
});

bot.on('login', () => {  
});


app.post('/move', (req, res) => {
  const { x, y, z } = req.body;
  if (typeof x === 'number' && typeof y === 'number' && typeof z === 'number') {
    bot.chat(`/tp ${bot.username} ${x} ${y} ${z}`); 
    res.send(`Bot teleported to X: ${x}, Y: ${y}, Z: ${z}`);
  } else {
    res.status(400).send('Invalid coordinates received');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
