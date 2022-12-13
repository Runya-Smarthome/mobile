import {View, Image, Text, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import LocationHelper from '../helper/LocationHelper'
import Colors from '../constants/Colors'
import SmallSpinner from './UI/SmallSpinner'

export default function CardWeather(){

    const [loading, isLoading] = useState(false)

    const [cardWeatherContent, setCardWeatherContent] = useState({
        country: '',
        city: '',
        humidity: '',
        temperature: '',
        weather: ''
    })

    useEffect(()=>{

        async function getlocation(){
            isLoading(true)
            const {data, place} = await LocationHelper()
            setCardWeatherContent({
                country: place[0].country,
                city: place[0].city,
                humidity: data.main.humidity,
                temperature: data.main.temp,
                weather: data.weather[0].main
            })
            isLoading(false)
        }
        
        getlocation()

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
                {
                    loading 
                    ? <SmallSpinner/>
                    : <Text style={styles.iconWeatherText}>{cardWeatherContent.weather}</Text>
                }
               
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
                    {
                        loading
                        ? <SmallSpinner/>
                        : <Text style={styles.locationValueWeather}>{cardWeatherContent.city}, {cardWeatherContent.country}</Text>
                    }
                    
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
                        {
                            loading
                            ? <SmallSpinner/>
                            : <Text style={styles.valueWeather}>{cardWeatherContent.temperature}</Text>
                        }
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
                        {
                            loading
                            ? <SmallSpinner/>
                            : <Text style={styles.valueWeather}>{cardWeatherContent.humidity}</Text>
                        }
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
        flex: 2,
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