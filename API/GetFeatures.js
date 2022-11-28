import axios from 'axios'
import {BASE_URL, API_TOKEN} from "@env"

const GetFeatures = async (req, res) => {
    const API_GETFEATURES = `${BASE_URL}/api/feature/getFeatures/${req.params}`
    switch(req.method){
        case "GET":
            try {
                const result = await axios.get(API_GETFEATURES)
                return{
                    feautureResult: result.data.data,
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

export default GetFeatures