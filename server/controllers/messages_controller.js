let messages = [];
let id = 0;

module.exports = {

    createMessage: (req, res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },

    readMessage: (req, res) => {
        res.status(200).send(messages);
    },

    updateMessage: (req, res) => {
        const {text} = req.body;
        const messageIndex = messages.findIndex(element => element.id == req.params.id);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        
        res.status(200).send(messages);
    },

    removeMessage: (req, res) => {
        const messageIndex = messages.findIndex(element => element.id == req.params.id);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }
}