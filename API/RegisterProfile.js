import axios from 'axios'
import {BASE_URL, API_TOKEN} from "@env"

const RegisterProfile = async (req, res) => {
    const API_REGPROF = `${BASE_URL}/api/auth/registerProfile`
    switch(req.method){
        case "POST":
            console.log(req.body)
            try {
                const result = await axios.post (API_REGPROF,{
                    email: req.body.email,
                    profiles: req.body.profiles
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

export default RegisterProfile