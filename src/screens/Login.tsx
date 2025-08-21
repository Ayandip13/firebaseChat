import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    return (
        <View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 100 }}>Login</Text>
            <View style={{ marginHorizontal: 20 }}>
                <TextInput
                    placeholder='Enter your Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={{ borderWidth: 1, marginHorizontal: 10, padding: 10, borderRadius: 5, marginTop: 20 }}
                />
                <TextInput
                    placeholder='Enter your Password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={{ borderWidth: 1, marginHorizontal: 10, padding: 10, borderRadius: 5, marginVertical: 10 }}
                />
                <TouchableOpacity style={{ backgroundColor: '#fff', marginHorizontal: 80, padding: 10, borderRadius: 5, elevation: 5, marginVertical: 20 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Login</Text>
                </TouchableOpacity>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>Don't have an account?
                    <Text
                        onPress={() => navigation.goBack('SignUp')}
                        style={{
                            color: 'blue',
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}> SignUp</Text>
                </Text>
            </View>
        </View>
    )
}

export default Login