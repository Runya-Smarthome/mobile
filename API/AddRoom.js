import axios from 'axios'
import {BASE_URL, API_TOKEN} from "@env"

const GetRooms = async (req, res) => {
    const API_ADDROOM = `${BASE_URL}/api/room/addRoom/${req.params}`
    switch(req.method){
        case "POST":
            try {
                const result = await axios.post(API_ADDROOM,{
                    roomName: req.body.roomName,
                    roomType: req.body.roomType
                })
                return{
                    registerResult: result.data.data.registerResult,
                    message: result.data.message,
                    status: result.status
                }
            } catch (e) {
              if(axios.isAxiosError(e)) {
                    return {
                        status: e.response.status,
                        message: e.response.data.message
                    }
              }
            }
    }
}

export default GetRooms