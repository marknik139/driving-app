import React from 'react';
import {TextInput, VStack} from "@react-native-material/core";

const AuthForm = ({email, setEmail ,password, setPassword}) => {
    return (
        <>
            <VStack spacing={2}>
                <TextInput label='Email' variant='outlined' value={email} onChangeText={setEmail}/>
                <TextInput label='Password' variant='outlined' value={password} onChangeText={setPassword}/>
            </VStack>
        </>
    );
};

export default AuthForm;