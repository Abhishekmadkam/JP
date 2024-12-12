import exprees from 'express';
import { testPostController } from '../controllers/testController.js';
//router object
const router = exprees.Router()

//routes
router.post('/test-post', testPostController)

//export
export default router
