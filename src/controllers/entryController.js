import db from '../../db.js';

export async function createEntry(req, res) {
    const entry = req.body;
    const auth = req.headers;

    

    try {
        const session = await db.collection('sessions').findOne()

        console.log(auth)
    } catch(err) {

    }
}