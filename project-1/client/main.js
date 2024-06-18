const Server = "152.42.194.14";
const Port = 9000;
const Topic = "/kelompok3/room3/temp";
const MQTTUserName = "bhiss";
const MQTTPassword = "elijaa";

const clientID = "clientID_" + parseInt(Math.random() * 100);

const client = new Paho.MQTT.Client(Server, Port, clientID);

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

const options = {
    userName: MQTTUserName,
    password: MQTTPassword,
    timeout: 3,

    onSuccess: function () {
        onConnect();
    },

    onFailure: function (message) {
        console.log("On failure=" + message.errorMessage);
        onFail(message.errorMessage);
    },
};

client.connect(options);

function onConnect() {
    console.log("onConnect");
    client.subscribe(Topic);
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

function onMessageArrived(message) {
    var MQTTDataObject = JSON.parse(message.payloadString);
    console.log(MQTTDataObject);
    document.getElementById("Room-Temp").textContent = (MQTTDataObject.Temp) + " C";
    document.getElementById("Room-Hum").textContent = (MQTTDataObject.Hum) + " %";
    console.log(MQTTDataObject.Hum);
    console.log(MQTTDataObject.Temp);
    console.log("onMessageArrived:" + message.payloadString);
}

function onFail(errorMessage) {
    console.log("Connection failed: " + errorMessage);
}
