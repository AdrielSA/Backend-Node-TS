import { Schema, model } from 'mongoose'
import { Document } from '../interfaces/document.interface'

const DocumentSchema = new Schema<Document>(
    {
        Id: {
            type: String,
            required: true
        },
        Title: {
            type: String,
            required: true
        },
        Size: {
            type: Number,
            required: false
        },
        CreationDate: {
            type: Date,
            required: true
        }
    }
)

const DocumentModel = model('documents', DocumentSchema)
export default DocumentModel