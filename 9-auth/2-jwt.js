const jwt = require('jsonwebtoken');

const secret = 'dobbyisfree'

const token = jwt.sign({
    id: 'userId',
    isAdmin: false,
    },
    secret,
    {
        expiresIn: 2
    }
);


setTimeout(() => {
    jwt.verify(token, secret, (error , decoded) => {
        console.log(error, decoded);
    })
})


console.log(token);