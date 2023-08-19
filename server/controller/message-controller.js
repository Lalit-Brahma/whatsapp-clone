import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

export const newMessage = async (req, res) => {
    try {
        const newMessage = new Message(req.body);

        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text})

        return res.status(200).json('message has been sent successfully');
    } catch(err) {
        return res.status(500).json('error while saving message')
    }

}


export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id });
        return res.status(200).json(messages);
    } catch(err) {
        return res.status(500).json(err.message);
    }
}