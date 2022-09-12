import axios from 'axios'
import {BASE_URL, API_TOKEN} from "@env"

const SignUp = async (req, res) => {
    const API_SIGNUP = `${BASE_URL}/api/auth/registerAccount`
    switch(req.method){
        case "POST":
            try {
                const result = await axios.post (API_SIGNUP,{
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    rePassword: req.body.rePassword,
                    idDevice: req.body.idDevice
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

export default SignUp