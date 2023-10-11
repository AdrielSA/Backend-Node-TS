import { Router } from 'express'
import { getFile, processFile } from '../controllers/document.controller'
import multer, { memoryStorage } from 'multer'

const router = Router()
const storage = memoryStorage()
const uploadMiddleware = multer({ storage })

router.get('/', getFile)
router.post('/process', uploadMiddleware.single('file'), processFile)

export { router }