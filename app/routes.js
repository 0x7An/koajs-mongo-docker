 /**
 * Routes file
 * This file describes any external endpoint of our application, calling their respective controllers.
 * 
 * @module router
 */

'use strict'

import Router from 'koa-router';
import { authenticate, index, create, find, update, destroy } from './controllers';
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Accounts Service';
});

router.post('/register', create);
router.post('/authenticate', authenticate);

router.get('/users', index);
router.get('/user/:id', find);
router.put('/user', update);
router.delete('/user', destroy);

export default router
