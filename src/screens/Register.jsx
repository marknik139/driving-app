import {useState} from 'react';
import {SafeAreaView} from 'react-native'
import {VStack, Text, HStack, Button} from "@react-native-material/core";
import {useNavigation} from "@react-navigation/native";
import {useAuth} from "../hooks/AuthContext";
import apiClient from "../apiClient";
import AuthForm from "../components/AuthForm";

const Register = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [_, setUser] = useAuth();

    const handleLogin = () => {
        navigation.navigate('Login');
    };
    const handleRegister = async () => {
        try {
            setIsLoading(true);
            const createdUser = await apiClient.register(email, password);
            setUser(createdUser.data);
        } catch(e) {
            alert(e.message || 'Unhandled error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView>
            <VStack spacing={6} style={{padding: 30}}>
                <VStack spacing={2}>
                    <Text variant='h6'>Register</Text>
                    <Text variant='subtitle1'>Create an account</Text>
                </VStack>
                <AuthForm
                    email={email}
                    setEmail={setEmail}
                    password={password} s
                    setPassword={setPassword}
                />
                <HStack justify='between'>
                    <Button
                        onPress={handleLogin}
                        title='Login Instead'
                        variant='text'
                        compact
                    />
                    <Button
                        loading={isLoading}
                        onPress={handleRegister}
                        title='Register'
                    />
                </HStack>
            </VStack>
        </SafeAreaView>
    )
}

export default Register;