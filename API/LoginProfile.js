import axios from 'axios'
import {BASE_URL, API_TOKEN} from "@env"

const LoginProfile = async (req, res) => {
    const API_LOGINPROFILE = `${BASE_URL}/api/auth/profile`
    switch(req.method){
        case "POST":
            try {
                const result = await axios.post (API_LOGINPROFILE,{
                    id: req.body.id,
                    password: req.body.password
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

export default LoginProfile