 const express = require ('express'),
       app = express();
       messagesCtrl = require ('./controllers/messages_controller');

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

//ENDPOINTS
app.post('/api/messages', messagesCtrl.createMessage);
app.get('/api/messages', messagesCtrl.readMessage);
app.put('/api/messages/:id', messagesCtrl.updateMessage);
app.delete('/api/messages/:id', messagesCtrl.removeMessage);

const port = 3001;
app.listen(port, () => {
    console.log(`Server listening to Port: ${port}`);
});
       
      