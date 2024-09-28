import {Router} from 'express';

import{
    guitarControllers,
    guitarControllerId
}
from  '../../controllers/guitar/guitarControllers.js'

const guitarRouter = Router();

guitarRouter.get('/', guitarControllers);
guitarRouter.get('/:id', guitarControllerId);

export default guitarRouter;