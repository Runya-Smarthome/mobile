import axios from 'axios'
import {BASE_URL, API_TOKEN} from "@env"

const GetRooms = async (req, res) => {
    const API_GETROOMS = `${BASE_URL}/api/room/getRooms/${req.params}`
    switch(req.method){
        case "GET":
            try {
                const result = await axios.get(API_GETROOMS)
                return{
                    roomResult: result.data.data,
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