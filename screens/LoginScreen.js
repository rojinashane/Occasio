import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    SafeAreaView,
    Animated,
    Easing,
    Text,
    Image
} from 'react-native';
import tw from 'twrnc';
import CustomText from '../components/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
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

    const validateLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters.');
            return;
        }

        // Navigate to Dashboard after validation
        navigation.navigate('Dashboard');
    };

    return (
        <SafeAreaView style={tw`flex-1 bg-[#00686F]`}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={tw`flex-1`}
            >
                {/* Top Branding Section */}
                <View style={tw`flex-1 justify-center items-center`}>
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
                            style={tw`w-30 h-30 mb-4`}
                            resizeMode="contain"
                        />
                        <Text
                            style={[
                                tw`text-5xl text-white mb-2`,
                                {
                                    fontFamily: 'LilyScriptOne',
                                    lineHeight: 70,
                                    paddingTop: 10,
                                },
                            ]}
                        >
                            Occasio
                        </Text>
                        <CustomText
                            fontFamily="Poppins-Light"
                            style={tw`text-white text-center text-sm`}
                        >
                            Welcome back to your event planning hub
                        </CustomText>
                    </Animated.View>
                </View>

                {/* Bottom Form Section */}
                <Animated.View
                    style={[
                        tw`flex-1 bg-white pt-8 px-8`,
                        {
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }
                    ]}
                >
                    <ScrollView contentContainerStyle={tw`pb-8`}>
                        <View style={tw`mb-6`}>
                            <CustomText
                                fontFamily="Poppins-Medium"
                                style={tw`text-[#00686F] mb-2`}
                            >
                                Email
                            </CustomText>
                            <TextInput
                                placeholder="Enter your email"
                                placeholderTextColor="#aaa"
                                value={email}
                                onChangeText={setEmail}
                                style={tw`bg-gray-100 rounded-xl px-4 py-3.5 text-[#00686F] text-base border border-gray-200 font-[Poppins-Regular]`}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={tw`mb-8`}>
                            <CustomText
                                fontFamily="Poppins-Medium"
                                style={tw`text-[#00686F] mb-2`}
                            >
                                Password
                            </CustomText>
                            <TextInput
                                placeholder="Enter your password"
                                placeholderTextColor="#aaa"
                                value={password}
                                onChangeText={setPassword}
                                style={tw`bg-gray-100 rounded-xl px-4 py-3.5 text-[#00686F] text-base border border-gray-200 font-[Poppins-Regular]`}
                                secureTextEntry
                            />
                        </View>

                        <TouchableOpacity
                            style={tw`bg-[#00686F] py-4 rounded-xl mb-4`}
                            onPress={validateLogin}
                        >
                            <CustomText
                                fontFamily="Poppins-SemiBold"
                                style={tw`text-white text-lg text-center`}
                            >
                                Login
                            </CustomText>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}
                            style={tw`mt-2`}
                        >
                            <CustomText
                                fontFamily="Poppins-Regular"
                                style={tw`text-gray-600 text-center text-base`}
                            >
                                Don't have an account?{' '}
                                <CustomText
                                    fontFamily="Poppins-SemiBold"
                                    style={tw`text-[#00686F]`}
                                >
                                    Sign Up
                                </CustomText>
                            </CustomText>
                        </TouchableOpacity>
                    </ScrollView>
                </Animated.View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
