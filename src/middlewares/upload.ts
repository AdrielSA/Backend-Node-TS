import { Request } from "express"
import multer, { diskStorage } from "multer"

const storage = diskStorage({
    destination(_req: Request, _file: Express.Multer.File, callback: any) {
        const path = `${process.cwd()}/src/temp`
        callback(null, path);
    },
    filename(_req: Request, file: Express.Multer.File, callback: any){
        const ext = file.originalname.split(".").pop();
        const fileName = `file-${Date.now()}.${ext}`
        callback(null, fileName)
    }
  })

  const uploadMiddleware = multer({ storage })

export default uploadMiddleware
