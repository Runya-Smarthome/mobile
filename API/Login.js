import axios from 'axios'
import {BASE_URL, API_TOKEN} from "@env"

const LogIn = async (req, res) => {
    const API_LOGIN = 'https://web-a69df7sp4-runya-smarthome.vercel.app/api/auth/login'
    switch(req.method){
        case "POST":
            try {
                const result = await axios.post (API_LOGIN,{
                    email: req.body.email,
                    password: req.body.password
                })

                return{
                    loginResult: result.data.data.loginResult,
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

export default LogIn