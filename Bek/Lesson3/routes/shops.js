import {Router} from 'express';
import { storesList } from '../data/mobilesList.js';


const router = Router();

router.get('/', (req, res) => {
    res.send(storesList);
});


export default router;