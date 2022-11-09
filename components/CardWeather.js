import {View, Image, Text, StyleSheet} from 'react-native'
import { useEffect, useState } from 'react'
import LocationHelper from '../helper/LocationHelper'
import Colors from '../constants/Colors'

export default function CardWeather(){

    // const [country, setCountry] = useState('');
    // const [region, setRegion] = useState('');
    // const [humidity, setHumidity] = useState('');
    // const [temperature, setTemperature] = useState('');
    // const [weather, setWeather] = useState('');

    const [cardWeatherContent, setCardWeatherContent] = useState({
        country: '',
        region: '',
        humidity: '',
        temperature: '',
        weather: ''
    })

    useEffect(()=>{
        LocationHelper().then(
            function(value) { 
                // setCountry(value.place[0].country)
                // setRegion(value.place[0].region)
                // setHumidity(value.data.main.humidity)
                // setTemperature(value.data.main.temp)
                // setWeather(value.data.weather[0].main)
                setCardWeatherContent({
                    country: value.place[0].country,
                    region: value.place[0].region,
                    humidity: value.data.main.humidity,
                    temperature: value.data.main.temp,
                    weather: value.data.weather[0].main
                })
            },
            function(error) { 
                console.log(error) 
            }
        );
    },[])

    return(
        <View style={styles.cardWeather}>
            <View style={styles.iconWeatherContainer}>
                <Image
                    source={require('../assets/weather-icon/Icon6.png')}
                    style={{
                            width: 120,
                            height: 86.4
                    }}
                />
                <Text style={styles.iconWeatherText}>{cardWeatherContent.weather}</Text>
            </View>
            <View style={styles.valueWeatherContainer}>
                <View style={styles.locationValueWeatherContainer}>
                    <Image
                        source={require('../assets/Icons/ci_location.png')}
                        style={{
                                width: 24,
                                height: 24
                        }}
                    />
                    <Text style={styles.locationValueWeather}>{cardWeatherContent.region}, {cardWeatherContent.country}</Text>
                </View>
                <View style={styles.titleValueWeatherContainer}>
                    <View style={styles.titleValueWeatherOuterContainer}>
                        <View style={styles.titleValueWeatherInnerContainer}>
                            <Image
                                source={require('../assets/Icons/ci_temperature.png')}
                                style={{
                                        width: 16,
                                        height: 16
                                }}
                            />
                            <Text style={styles.titleValueWeather}>Temperature</Text>
                        </View>
                        <Text style={styles.valueWeather}>{cardWeatherContent.temperature}</Text>
                        
                    </View>
                    <View style={[styles.titleValueWeatherOuterContainer,{marginLeft: 12}]}>
                        <View style={styles.titleValueWeatherInnerContainer}>
                            <Image
                                source={require('../assets/Icons/ci_humidity.png')}
                                style={{
                                        width: 16,
                                        height: 16
                                }}
                            />
                            <Text style={styles.titleValueWeather}>Humidity</Text>
                        </View>
                        <Text style={styles.valueWeather}>{cardWeatherContent.humidity}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWeather: {
        marginVertical: 28,
        height: 125,
        width: '100%',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 6,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row'
    },
    iconWeatherContainer: {
        flex: 1,
        alignItems: 'center'
    },
    iconWeatherText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 12,
        color: Colors.dark300
    },
    valueWeatherContainer: {
        flex: 1.5,
        paddingLeft: 32,
        justifyContent: 'center'
    },
    locationValueWeatherContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationValueWeather: {
        fontFamily: 'Inter_400Regular',
        fontSize: 12,
        color: Colors.dark500
    },
    titleValueWeatherContainer: {
        marginTop: 16,
        marginLeft: 4,
        flexDirection: 'row',
    },
    titleValueWeatherOuterContainer: {
        alignItems: 'center'
    },
    titleValueWeatherInnerContainer: {
        flexDirection: 'row'
    },
    titleValueWeather: {
        fontFamily: 'Inter_400Regular',
        fontSize: 10,
        color: Colors.dark500
    },
    valueWeather: {
        fontFamily: 'Inter_400Regular',
        fontSize: 20,
        color: Colors.dark500
    },
})