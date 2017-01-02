const apiai = require('apiai');
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('node-uuid');
const request = require('request');
const JSONbig = require('json-bigint');
const async = require('async');
const REST_PORT = (process.env.PORT || 5000);
const APIAI_ACCESS_TOKEN = "";
const APIAI_LANG = process.env.APIAI_LANG || 'en';
const apiAiService = apiai(APIAI_ACCESS_TOKEN);
var Botkit = require('./lib/Botkit.js');
var Constants = require('./constants.js');
var os = require('os');
var db = require('node-localdb');


var sessionId = uuid.v1();
var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: "xoxb-120765451428-6huRugjg2YpvW0vdTy3nO1Ea"
}).startRTM();

function sendNewMessage() {
    var channel = "";

    var message1 = {
        'type': 'message',
        'channel': "D3KATA1PY",
        user: "U36MXABM2",
        text: 'what is my name',
        ts: '1482920918.000057',
        team: "T2T2K05NC",
        event: 'direct_message'
    };
    bot.startConversation(message1, function (err, convo) {
        if (!err) {
            console.log("arrive ");
            convo.say('Ibrahim wants a vacation!');

        }
    });


}
function processEvent(event) {
    console.log("Ibrahim");

}
function doSubscribeRequest() {
    console.log("Ibrahim");

}
const app = express();
app.use(bodyParser.text({ type: 'application/json' }));
app.get('/webhook/', (req, res) => {
    if ("" == "") {
        res.send("Ibrahimzahra");

        setTimeout(() => {
            doSubscribeRequest();
        }, 3000);
    } else {
        res.send('Error, wrong validation token');
    }
});

app.post('/webhook/', (req, res) => {
    try {
        var data = JSONbig.parse(req.body);
        sendNewMessage();
        return res.status(200).json({
            status: "ok"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            error: err
        });
    }

});

app.listen(REST_PORT, () => {
    console.log('Rest service ready on port ' + REST_PORT);
});

doSubscribeRequest();
