import React from 'react'
import { SafeAreaView, StyleSheet, Image,View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                style={{
                    width:100,
                    height:100,
                    resizeMode:"contain"
                }}
                source={{
                    uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png',
                }} />
            </View>
            <NavOptions />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
