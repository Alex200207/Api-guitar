import {Router} from 'express';

import{
    guitarControllers,
}
from  '../../controllers/guitar/guitarControllers.js'

const guitarRouter = Router();

guitarRouter.get('/', guitarControllers);

export default guitarRouter;