import React from 'react';
import {
    View,
    TouchableOpacity,
    Animated,
    Easing,
    SafeAreaView,
    Image,
    Text,
    Dimensions,
    ScrollView
} from 'react-native';
import tw from 'twrnc';
import CustomText from '../components/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

export default function LandingScreen({ navigation }) {
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    const slideUpAnim = React.useRef(new Animated.Value(100)).current;
    const scaleAnim = React.useRef(new Animated.Value(0.9)).current;

    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(slideUpAnim, {
                toValue: 0,
                duration: 800,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <SafeAreaView style={tw`flex-1 bg-[#00686F]`}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                bounces={false}
                keyboardShouldPersistTaps="handled"
            >
                <View style={tw`flex-1 bg-[#00686F] justify-center items-center`}>
                    <Animated.View
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }, { scale: scaleAnim }],
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('../assets/logo/Logo.png')}
                            style={{
                                width: width * 0.3,
                                height: width * 0.3,
                                marginBottom: height * 0.02,
                            }}
                            resizeMode="contain"
                        />

                        <Text
                            style={{
                                fontFamily: 'LilyScriptOne',
                                fontSize: width * 0.12,
                                color: 'white',
                                lineHeight: width * 0.15,
                                marginBottom: height * 0.01,
                            }}
                        >
                            Occasio
                        </Text>

                        <CustomText
                            fontFamily="Poppins-Light"
                            style={{
                                color: 'white',
                                fontSize: width * 0.04,
                                textAlign: 'center',
                                paddingHorizontal: width * 0.1,
                            }}
                        >
                            Event planning perfected
                        </CustomText>
                    </Animated.View>
                </View>

                <Animated.View
                    style={[
                        tw`pt-10 px-6 bg-white`,
                        {
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            transform: [{ translateY: slideUpAnim }],
                            opacity: fadeAnim,
                        },
                    ]}
                >
                    <View style={tw`justify-center`}>
                        <CustomText
                            fontFamily="Poppins-SemiBold"
                            style={{
                                fontSize: width * 0.065,
                                textAlign: 'center',
                                color: '#00686F',
                                marginBottom: height * 0.01,
                            }}
                        >
                            Welcome to Occasio
                        </CustomText>

                        <CustomText
                            fontFamily="Poppins-Regular"
                            style={{
                                color: '#4B5563',
                                fontSize: width * 0.04,
                                textAlign: 'center',
                                marginBottom: height * 0.03,
                                lineHeight: width * 0.06,
                                paddingHorizontal: width * 0.05,
                            }}
                        >
                            Your smart partner in effortless event planning. Experience the convenience of virtual venue visits with AR, smart weather forecasts, RSVP tracking, and more – all in one app.
                        </CustomText>

                        <Animated.View style={{ opacity: fadeAnim }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                                activeOpacity={0.8}
                                style={{
                                    backgroundColor: '#00686F',
                                    paddingVertical: height * 0.02,
                                    borderRadius: 999,
                                    marginBottom: height * 0.015,
                                }}
                            >
                                <CustomText
                                    fontFamily="Poppins-SemiBold"
                                    style={{
                                        textAlign: 'center',
                                        color: 'white',
                                        fontSize: width * 0.045,
                                    }}
                                >
                                    Login
                                </CustomText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Signup')}
                                activeOpacity={0.8}
                                style={{
                                    borderColor: '#00686F',
                                    borderWidth: 2,
                                    paddingVertical: height * 0.02,
                                    borderRadius: 999,
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <CustomText
                                    fontFamily="Poppins-SemiBold"
                                    style={{
                                        textAlign: 'center',
                                        color: '#00686F',
                                        fontSize: width * 0.045,
                                    }}
                                >
                                    Sign Up
                                </CustomText>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>

                    {/* Social Icons */}
                    <Animated.View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginVertical: height * 0.04,
                            opacity: fadeAnim,
                        }}
                    >
                        {['facebook', 'twitter', 'instagram'].map((icon) => (
                            <TouchableOpacity
                                key={icon}
                                activeOpacity={0.7}
                                style={{ marginHorizontal: width * 0.03 }}
                            >
                                <View
                                    style={{
                                        width: width * 0.13,
                                        height: width * 0.13,
                                        borderRadius: width * 0.065,
                                        backgroundColor: 'rgba(0,104,111,0.1)',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <FontAwesome
                                        name={icon}
                                        size={width * 0.06}
                                        color="#00686F"
                                    />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </Animated.View>
                </Animated.View>
            </ScrollView>
        </SafeAreaView>
    );
}
