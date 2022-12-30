import axios from 'axios'
import {BASE_URL, API_TOKEN} from "@env"

const addFeatures = async (req, res) => {
    const API_ADDFEATURES = `${BASE_URL}/api/feature/addFeature/${req.params}`
    switch(req.method){
        case "POST":
            try {
                const result = await axios.post(API_ADDFEATURES,{
                    topic: req.body.topic,
                    featureType: req.body.featureType,
                    featureName: req.body.featureName
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

export default addFeatures