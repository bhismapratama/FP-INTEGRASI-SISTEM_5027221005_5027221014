#This Program will check the room temperature 
#if Room Temperature Exceeds 30 Centigrade then it send the 
# Message at /kel3/room/temperature to turn on the LED
# Else Turn Off the LED

import paho.mqtt.client as mqtt
import json

def on_connect(client, userdata, flags, rc):
    # subscribe, which need to put into on_connect
    # if reconnect after losing the connection with the broker, it will continue to subscribe to the raspberry/topic topic
    client.subscribe("/kel3/room/temperature")

# the callback function, it will be triggered when receiving messages
def on_message(client, userdata, message):
    readings=str(message.payload.decode("utf-8"))
    print("message received " ,readings)
    JsonReadings=json.loads(readings)
    print("Temperature=",JsonReadings["Temp"])
    if JsonReadings["Temp"]>30:
        client.publish("/kel3/room/led","On")
    else:
        client.publish("/kel3/room/led","Off")

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
# create connection, the three parameters are broker address, broker port number, and keep-alive time respectively
client.username_pw_set(username="bhiss",password="ell")
client.connect("198.148.113.137", 1883, 60)
# set the network loop blocking, it will not actively end the program before calling disconnect() or the program crash
client.loop_forever()