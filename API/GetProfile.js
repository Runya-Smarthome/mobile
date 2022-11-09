import axios from 'axios'
import {BASE_URL, API_TOKEN} from "@env"

const GetProfile = async (req, res) => {
    const API_GETPROFILE = `${BASE_URL}/api/auth/profile/${req.params}`
    switch(req.method){
        case "POST":
            try {
                const result = await axios.post(API_GETPROFILE,{
                    email: req.body.email
                },{
                    headers: req.headers
                })
                return{
                    loginResult: result.data.data,
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

export default GetProfile