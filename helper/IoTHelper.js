import Paho from 'paho-mqtt'

class IoTHelper {
    constructor(topics, client){
        this.topics = topics
        this.client = client
    }

    SwitchHandler(topic, value)
    {
        if(this.topics == topic){
            const message = new Paho.Message(value);
            message.destinationName = topic;
            this.client.send(message);
        }

    }

    RetrieveHandler(topic, message)
    {
        if(this.topics == topic){
            if (message.destinationName === topic) {
                return message.payloadString
            }
        }
    }

    BellHandler()
    {

    }

    DoorHandler()
    {

    }

    GardenHandler()
    {

    }

}

export default IoTHelper