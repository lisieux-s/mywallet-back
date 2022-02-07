import db from '../../db.js';

export async function createEntry(req, res) {
  const entry = req.body;

  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await db.collection('sessions').findOne({ token });
    if (!session) {
      return res.sendStatus(401);
    }

    const user = await db.collection('users').findOne({ _id: session.userId });
    if (!user) {
      return res.sendStatus(401);
    }

    delete user.password;

    await db.collection(toString(user._id)).insertOne({ ...entry });
    res.send(user);
  } catch (err) {}
}

export async function getEntries(req, res) {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  if (!token) {
    return res.sendStatus(401);
  }

  const session = await db.collection('sessions').findOne({ token });

  if (!session) {
    return res.sendStatus(401)
  }

  const user = await db.collection('users').findOne({ _id: session.userId }); 
  if (!user) {
    return res.sendStatus(401);
  }

  delete user.password;

  const entries = await db.collection(toString(user._id)).find().toArray();
  console.log(entries)
  res.send(entries);
}
