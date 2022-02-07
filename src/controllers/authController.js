import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import db from '../../db.js';

export async function signUp(req, res) {
  const user = req.body;
  const hashPassword = bcrypt.hashSync(user.password, 10);

  if(user.password !== user.confirmPassword) {
      return res.sendStatus(400)
  }

  const existingUser = await db
    .collection('users')
    .findOne({ email: { $eq: user.email } });
  if (existingUser) {
    return res.sendStatus(409);
  }

  try {
    await db.collection('users').insertOne({
      ...user,
      password: hashPassword,
    });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const { email, password } = req.body;
  const user = await db.collection('users').findOne({ email });

  try {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = uuid();
      await db.collection('session').insertOne({ token, userId: user._id });
      res.send(token);

    } else {
      res.sendStatus(401);
    }
    
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
