import 'dotenv/config'
import { Request, Response } from 'express'
import { processDocument } from '../services/document.services'

const serverErrorStatus: number = Number.parseInt(process.env.SERVER_ERROR_STATUS || '0')
const clientErrorStatus: number = Number.parseInt(process.env.CLIENT_ERROR_STATUS || '0')

const processFile = async (req: Request, res: Response) => {
    try {
        const { file } = req
        if (file) {
            const response = await processDocument(file)
            res.send(response)
        }else{
            res.status(clientErrorStatus).send('The document could not be read.')
        }
    } catch (error) {
        console.log(error)
        res.status(serverErrorStatus).send('A server side error occurred.')
    }
}

const getFile = async (_req: Request, res: Response) => {
    try {
        res.render('index', { title: 'Backend Test in node' })
    } catch (error) {
        console.log(error)
        res.status(serverErrorStatus).send('A server side error occurred.')
    }
}

export { getFile, processFile }