import fs from 'fs'
// import { load } from '@pspdfkit/nodejs'
import DocumentModel from '../models/document'
import { Document } from '../interfaces/document.interface'

const processDocument = async (file: Express.Multer.File) => {
    // const buffer = fs.readFileSync(file.path)
    // const instance = await load({ document: buffer })
    // const docInfo = instance.getDocumentInfo()
    // await instance.close()

    const doc: Document = {
        DocumentId: file.filename,
        Title: file.originalname,
        Size: file.size,
        CreationDate: new Date()
    }

    await DocumentModel.create(doc)
    fs.unlinkSync(file.path)
    return doc
}

export { processDocument }