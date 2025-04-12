/* eslint-disable @typescript-eslint/no-unused-expressions */
import {Router} from 'express';
import {StatusCodes} from 'http-status-codes'

import {CidadesController} from './../controllers';

CidadesController.create

const router = Router();

router.get('/', (_, res) => {
    res.send('Olá DEV!');
})

router.post('/cidades', CidadesController.create)

export {router}