import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert,
    SafeAreaView,
    Animated,
    Easing,
    Text,
    Image
} from 'react-native';
import tw from 'twrnc';
import CustomText from '../components/CustomText';

export default function SignupScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Animation values
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    const slideUpAnim = React.useRef(new Animated.Value(30)).current;

    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(slideUpAnim, {
                toValue: 0,
                duration: 600,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            })
        ]).start();
    }, [fadeAnim, slideUpAnim]);

    const validateSignup = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !password) {
            Alert.alert('Missing Fields', 'Please fill in all fields.');
            return;
        }

        if (!emailRegex.test(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Weak Password', 'Password must be at least 6 characters.');
            return;
        }

        Alert.alert('Success', 'Account created successfully!');
    };

    return (
        <SafeAreaView style={tw`flex-1 bg-[#00686F]`}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
                style={tw`flex-1`}
            >
                {/* Top Branding Section */}
                <View style={tw`h-1/2 justify-center items-center`}>
                    <Animated.View
                        style={[
                            tw`items-center`,
                            {
                                opacity: fadeAnim,
                                transform: [{ translateY: slideUpAnim }],
                            },
                        ]}
                    >
                        <Image
                            source={require('../assets/logo/Logo.png')}
                            style={tw`w-24 h-24 mb-2`}
                            resizeMode="contain"
                        />
                        <Text
                            style={[
                                tw`text-4xl text-white mb-1`,
                                {
                                    fontFamily: 'LilyScriptOne',
                                    lineHeight: 50,
                                },
                            ]}
                        >
                            Occasio
                        </Text>
                        <CustomText
                            fontFamily="Poppins-Light"
                            style={tw`text-white text-center text-xs`}
                        >
                            Start planning your perfect events
                        </CustomText>
                    </Animated.View>
                </View>

                {/* Bottom Form Section */}
                <Animated.View
                    style={[
                        tw`flex-1 bg-white pt-6 px-8`,
                        {
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }
                    ]}
                >
                    <View style={tw`mb-4`}>
                        <CustomText
                            fontFamily="Poppins-Medium"
                            style={tw`text-[#00686F] mb-1 text-sm`}
                        >
                            Full Name
                        </CustomText>
                        <TextInput
                            placeholder="Enter your full name"
                            placeholderTextColor="#aaa"
                            value={name}
                            onChangeText={setName}
                            style={tw`bg-gray-100 rounded-lg px-4 py-3 text-[#00686F] text-sm border border-gray-200 font-[Poppins-Regular]`}
                            autoCapitalize="words"
                        />
                    </View>

                    <View style={tw`mb-4`}>
                        <CustomText
                            fontFamily="Poppins-Medium"
                            style={tw`text-[#00686F] mb-1 text-sm`}
                        >
                            Email
                        </CustomText>
                        <TextInput
                            placeholder="Enter your email"
                            placeholderTextColor="#aaa"
                            value={email}
                            onChangeText={setEmail}
                            style={tw`bg-gray-100 rounded-lg px-4 py-3 text-[#00686F] text-sm border border-gray-200 font-[Poppins-Regular]`}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={tw`mb-6`}>
                        <CustomText
                            fontFamily="Poppins-Medium"
                            style={tw`text-[#00686F] mb-1 text-sm`}
                        >
                            Password
                        </CustomText>
                        <TextInput
                            placeholder="Create a password"
                            placeholderTextColor="#aaa"
                            value={password}
                            onChangeText={setPassword}
                            style={tw`bg-gray-100 rounded-lg px-4 py-3 text-[#00686F] text-sm border border-gray-200 font-[Poppins-Regular]`}
                            secureTextEntry
                        />
                        <CustomText
                            fontFamily="Poppins-Regular"
                            style={tw`text-gray-500 text-xs mt-1`}
                        >
                            Must be at least 6 characters
                        </CustomText>
                    </View>

                    <TouchableOpacity
                        style={tw`bg-[#00686F] py-3 rounded-lg mb-3`}
                        onPress={validateSignup}
                    >
                        <CustomText
                            fontFamily="Poppins-SemiBold"
                            style={tw`text-white text-base text-center`}
                        >
                            Sign Up
                        </CustomText>
                    </TouchableOpacity>

                    <View style={tw`flex-row justify-center`}>
                        <CustomText
                            fontFamily="Poppins-Regular"
                            style={tw`text-gray-600 text-sm`}
                        >
                            Already have an account?{' '}
                        </CustomText>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <CustomText
                                fontFamily="Poppins-SemiBold"
                                style={tw`text-[#00686F] text-sm`}
                            >
                                Login
                            </CustomText>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}