
import * as express from 'express';
let router = express.Router();
import { CreateChirp, GetChirp, DeleteChirp, GetChirps, UpdateChirp } from './chirpstore';

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        res.send(GetChirp(id));
    } else {
        res.send(GetChirps());
    }
});

router.post('/', (req, res) => {
    CreateChirp(req.body);
    res.sendStatus(200);
})

router.put('/:id?', (req, res) => {
    let id = req.params.id
    let chirp = req.body
    res.send(UpdateChirp(id, chirp));
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    res.send(DeleteChirp(id));
});

// router.get('/:id?', (req, res) => {
//     let id = req.params.id
//     if(id) {
//         res.json(chirpStore.GetChirp(id));
//     } else {
//         res.send(chirpStore.GetChirps());
//     }
// });

// router.post('/', (req, res) => {
//     chirpStore.CreateChirp(req.body);
//     res.sendStatus(200);
// })


export default router;