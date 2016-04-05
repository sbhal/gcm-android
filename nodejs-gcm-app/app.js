var gcm = require('node-gcm');

var message = new gcm.Message();

message.addData('key1', 'msg1');

var regTokens = ['APA91bE5OtB8HEnOZmkcB21Zo_-VcTwvIYa9V83clg0Wypfb0oFyeYWv2pOD2DUcuxEwujv00GPmYQc2aTS49d8GAA9J__oTVC1wR0KWmTUYvX1nZ0ayR30yB3EuDkNbDXnQenzfg6U6'];

// Set up the sender with you API key
var sender = new gcm.Sender('AIzaSyAsocUcvcUbzmVf4e0C41mwvg9kb_8xuy0');

// Now the sender can be used to send messages
sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if(err) console.error(err);
    else    console.log(response);
});

// Send to a topic, with no retry this time
sender.sendNoRetry(message, { topic: '/topics/global' }, function (err, response) {
    if(err) console.error(err);
    else    console.log(response);
});
