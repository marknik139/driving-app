import {useNavigation} from "@react-navigation/native";
import {useState} from 'react';
import {useAuth} from "../hooks/AuthContext";
import {VStack, Text, HStack, Button} from "@react-native-material/core";
import {SafeAreaView} from 'react-native';
import apiClient from "../apiClient";
import AuthForm from "../components/AuthForm";

const Login = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    const [_, setUser] = useAuth();

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const res = await apiClient.signIn(email, password);
            setUser(res.data);
        } catch (e) {
            alert(e.message || 'Unhandled error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView>
            <VStack spacing={6} style={{padding: 30}}>
                <VStack spacing={2}>
                    <Text variant='h6'>Login</Text>
                    <Text variant='subtitle1'>Login to your account</Text>
                </VStack>
                <AuthForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                />
                <HStack justify='between'>
                    <Button
                        onPress={handleRegister}
                        title='Register Instead'
                        variant='text'
                        compact
                    />
                    <Button
                        loading={isLoading}
                        onPress={handleLogin}
                        title='Login'
                    />
                </HStack>
            </VStack>
        </SafeAreaView>
    )
}

export default Login;