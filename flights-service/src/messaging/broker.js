var kafka = require('kafka-node');

var errorPrinter = function (baseMessage) {
    return function (err) {
        console.error(baseMessage);
        console.error(err);
    };
};



var client = new kafka.Client('localhost:2181', 'nodejs-client');
client.on('error', errorPrinter('--- Client error ---'));



var producer = new kafka.Producer(client);
var payloads = [
    { topic: 'producer.connected', messages: 'nodejs-service producer connected', partition: 0 }
];
producer.on('ready', function () {
    console.log('Producer ready');
    producer.createTopics(['producer.connected'], false, function (err) {
        producer.send(payloads, function (err, data) { /* Nothing to do here */ });
    });
});
client.on('error', errorPrinter('--- Producer error ---'));



const Broker = {

    send: function (topic, message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        payloads = [
            { topic: topic, messages: message, partition: 0 }
        ];
        producer.createTopics([topic], false, function (err) {
            producer.send(payloads, function (err, data) {
                // console.log(err);
                // console.log(data);
            });
        });
    },

    on: function (topic, handler) {
        var consumer = new kafka.Consumer(
            client,
            [
                { topic: topic, partition: 0 }
            ],
            { autoCommit: false }
        );
        consumer.on('error', errorPrinter('--- Consumer error ---'));
        consumer.addTopics([topic], function (err) {
            consumer.on('message', function (message) {
                var messageValue = message.value;
                try {
                    messageValue = JSON.parse(messageValue);
                } catch (exception) {

                }
                handler(messageValue);
            });
        });
    }

};

module.exports = Broker;