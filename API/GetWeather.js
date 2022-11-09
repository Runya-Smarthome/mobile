import axios from 'axios'
import {BASE_URL_WEATHER, API_TOKEN_WEATHER} from "@env"

const GetWeather = async (req, res) => {
    switch(req.method){
        case "GET":
            try {
                const result = await axios.get (`https://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}&units=metric&appid=1d3db07f4a2c71b2bf8fcc56d9a53b6e`)
                return result.data
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

export default GetWeather