import conversation from "../model/Conversation.js";


export const newConversation = async (req, res) =>{
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        const exist = await conversation.findOne({ members: { $all: [receiverId, senderId] } });

        if(exist) {
            return res.status(200).json('conversation already exists')
        }

        const newConversation = new conversation({
            members: [senderId, receiverId]
        })

        await newConversation.save();
        return res.status(200).json('conversation saved successfully');
    } catch(err) {
        return res.status(500).json(err.message);
    }
}


export const getConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        let convo = await conversation.findOne({ members: { $all: [receiverId, senderId] } });
        return res.status(200).json(convo);
    } catch(err) {
        return res.status(500).json(err.mesaage);
    }
}