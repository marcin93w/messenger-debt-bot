const 
    express = require('express'),
    router = express.Router(),
    DebtAssistant = require('./debt-assistant.js'),
    messenger = require('./graph-api/messenger.js'),
    graphApiUser = require('./graph-api/user.js');
    facebookWebhookValidator = require('./facebook-webhook-validator.js');

const debtAssistant = new DebtAssistant(messenger, graphApiUser);

router.route('/').get((req, res) => {
    const challenge = facebookWebhookValidator.validateRequestAndGetChallenge(req);
    if(challenge) {
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }  
});

router.route('/').post((req, res) => {  
    const body = req.body;

    if(!isFromPageSubscription(body)) {
        res.sendStatus(404);
        return;
    }

    body.entry.forEach(processIncomingEvent);
    res.status(200).send('EVENT_RECEIVED');    
});

function isFromPageSubscription(body) {
    return body.object === 'page';
}

function processIncomingEvent(entry) {
    let webhookEvent = entry.messaging[0];
    console.log(webhookEvent);

    if (webhookEvent.message) {
        debtAssistant.handleMessage(webhookEvent.sender.id, webhookEvent.message);        
    } else if (webhookEvent.postback) {
        //TODO handle postbacks 
    }
}

module.exports = router;