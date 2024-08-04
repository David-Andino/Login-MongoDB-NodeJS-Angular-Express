const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.createUser = async (req, res, next) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8) // Hasheo de la contraseña antes de guardar
    };

    try {
        const user = await User.create(newUser);
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
            expiresIn: expiresIn
        });

        // response
        res.status(201).send({ user, accessToken });
        
    } catch (err) {
        if(err && err.code === 11000 ) return res.status(409).send('Email already exist');
        res.status(500).send('Server error');
    }
};

exports.loginUser = async (req, res, next) => {
    const userData = {
        email: req.body.email,
        password: req.body.password,
    };

    try {
        const user = await User.findOne({ email: userData.email }).exec();
        if (!user) {
            // email no existe
            return res.status(409).send({ message: 'Something is wrong' });
        }

        const passwordIsValid = bcrypt.compareSync(userData.password, user.password); // Comparación de la contraseña
        if (!passwordIsValid) {
            // password wrong
            return res.status(409).send({ message: 'Something is wrong' });
        }

        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });

        res.send({ user, accessToken });
    } catch (err) {
        res.status(500).send('Server error');
    }
};
