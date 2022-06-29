const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', function(){
    setInterval(function(){
        var random = Math.random() * 50;
        console.log(random);
        if (random<30){
            client.publish('Melih', 'Simple MQTT: ' + random.toString() + '.');
        }
    }),30000;
});