import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/core';

const NavOptions = () => {
    const navigation =useNavigation();
    const data = [
        {
            id: '123',
            title: 'Get a ride',
            image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png',
            screen: 'MapScreen'
        },
        {
            id: '12123',
            title: 'Order Food',
            image: 'https://vectorlogo4u.com/wp-content/uploads/2019/11/French-Fries-Vector.png',
            screen: 'EatScreen'
        }
    ]
    return (
        <View>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item)=>item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-2 bg-gray-200 m-2 w-40`}>

                        <View>
                            <Image 
                            style={{
                                width:120,
                                height:120,
                                resizeMode:"contain"
                            }}
                            source={{
                                uri:item.image
                            }}
                            />
                        <Text style={tw`mt-2 ml-4 font-semibold text-lg`}>{item.title}</Text>
                        <Icon style={tw`p-2 bg-black rounded-full w-10 mt-3`} name="arrowright" color="white" type="antdesign" />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavOptions

const styles = StyleSheet.create({})
