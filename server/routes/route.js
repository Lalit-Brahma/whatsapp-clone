import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';
import { getConversation, newConversation } from '../controller/conversation-controller.js';
import { getMessages, newMessage } from '../controller/message-controller.js';
import { getImage, uploadFile } from '../controller/image-controller.js';
import upload from '../utils/upload.js';
const router = express.Router();

router.post('/add', addUser);
router.get('/users', getUsers);

router.post('/conversation/add', newConversation);
router.post('/conversation/get', getConversation);

router.post('/message/add', newMessage);
router.get('/message/get/:id', getMessages);

router.post('/file/upload', upload.single('file'), uploadFile);
router.get('/file/:filename', getImage);


export default router; 