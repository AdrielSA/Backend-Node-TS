import { Router } from 'express'
import { getFile, processFile } from '../controllers/document.controller'
import uploadMiddleware from '../middlewares/upload'

const router = Router()

router.get('/', getFile)
router.post('/process', uploadMiddleware.single('file'), processFile)

export { router }