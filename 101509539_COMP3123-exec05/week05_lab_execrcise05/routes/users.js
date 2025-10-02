const express = require('express');
const fs = require('fs/promises');
const { type } = require('os');
const path = require('path');

const routerUser = express.Router();
routerUser.use(express.json());

const USER_PATH = path.join(__dirname, '..', 'user.json');

async function readUsers(){
    const raw = await fs.readFile(USER_PATH, 'utf-8');
    return JSON.parse(raw);
}

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', async (req,res) => {
    try{
        const users = await readUsers();
        res.json(users);
    }catch(e){
        res.status(500).send(e.message);
    }
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', async (req,res) => {
  const { username, password } = req.body || {};
  if(!username || !password){
    return res.status(400).json({ status: false, message: "Username and Password are required" });
  }

  try {
    const data = await readUsers();
    
    let user, storedPassword;

    if(Array.isArray(data)){
        user = data.find(u => u.username === username);
        storedPassword = user ? user.password : null;
    } else if (data && typeof data === 'object') {
        user = data[username];
        storedPassword = (user && typeof user === 'object') ? user.password : data[username];
    }

    if(!user){
        return res.json({ status: false, message: "User Name is invalid" });
    }

    if(storedPassword !== password){
        return res.json({ status: false, message: "Password is invalid" });
    }
    
    return res.json({ status: true, message: "User Is valid" });

  } catch (e) {
    return res.status(500).json({ status: false, message: 'Failed to read users file' });
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req,res) => {
  const username = req.params.username || req.query.username;
  if(!username){
    return res.status(400).send('Username is required');
  }
  res.send(`<b>${username} successfully logout.</b>`);
});

module.exports = routerUser;