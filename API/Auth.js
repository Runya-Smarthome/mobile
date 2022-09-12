import axios from 'axios'
import {BASE_URL, API_TOKEN} from "@env"

const Auth = async (req, res) => {
    const API_ISAUTH = 'https://web-74nly0mu4-runya-smarthome.vercel.app/api/auth/isAuth'
    switch(req.method){
        case "POST":
            try {
                const result = await axios.post (API_ISAUTH,{
                    email: req.body.email,
                },{
                    headers: req.headers
                })

                return{
                    profilesResult: result.data.data,
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

export default Auth