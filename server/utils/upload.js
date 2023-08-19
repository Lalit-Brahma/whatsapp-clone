import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const storage = new GridFsStorage({
    url: process.env.MONGO_URI,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1) {
            console.log('ho gya');
            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
            bucketName: 'photos',
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});


export default multer({ storage });