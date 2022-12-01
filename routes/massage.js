const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile('massage.txt', (err, data) => {
        if (err) {
            console.log(err);
            data = "No chat exist !";
        }
        res.send(`<br>${data}<form action="/" method="POST" onSubmit="document.getElementById('user').value=localStorage.getItem('username')">
        <input type="text" name="massage" id="massage" placeholder="type massage...">
        <input type="hidden" name="user" id="user">
        <button type="submit">send</button>
        </form>
        <h1>This is a chat app !</h1>`);
    })

})

router.post('/', (req, res, next) => {
    console.log(req.body.user);
    console.log(req.body.massage);
    fs.writeFile('massage.txt', `${req.body.user} : ${req.body.massage} `, { flag: 'a' }, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

module.exports = router; 