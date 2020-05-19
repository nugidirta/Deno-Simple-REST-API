import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getDogs, getDog, addDog, updateDog, removeDog } from './controller.ts'


const router = new Router()
router
    .get('/dogs', getDogs)
    .get('/dogs/:name', getDog)
    .post('/dogs', addDog)
    .put('/dogs/:name', updateDog)
    .delete('/dogs/:name', removeDog)

export default router