import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid'

import db from '../../db.js'

export async function signUp(req, res) {
    const user = req.body;
    const hashPassword = bcrypt.hashSync(user.password, 10);

    try {
        await db.collection('users').insertOne({
            ...user, 
            password: hashPassword
        })
        console.log(user)
        res.sendStatus(201)
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
}