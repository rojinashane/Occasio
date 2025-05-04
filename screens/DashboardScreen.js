import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DashboardScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(300)); // Off-screen

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setMenuVisible(false));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Occasio</Text>
          <TouchableOpacity onPress={openMenu}>
            <Ionicons name="menu" size={28} color="#00686F" />
          </TouchableOpacity>
        </View>

        {/* Weather Forecast */}
        <Text style={styles.sectionTitle}>Weather Forecast</Text>
        <View style={styles.weatherContainer}>
          {[
            { day: 'Mon', icon: 'sunny', temp: '72°', desc: 'Sunny' },
            { day: 'Tue', icon: 'partly-sunny', temp: '68°', desc: 'Partly Cloudy' },
            { day: 'Wed', icon: 'cloud', temp: '65°', desc: 'Cloudy' },
            { day: 'Thu', icon: 'sunny', temp: '70°', desc: 'Sunny' },
            { day: 'Fri', icon: 'rainy', temp: '63°', desc: 'Rainy' },
          ].map((item, index) => (
            <View key={index} style={styles.weatherItem}>
              <Ionicons name={item.icon} size={24} color="#00686F" />
              <Text style={styles.weatherTemp}>{item.temp}</Text>
              <Text style={styles.weatherDesc}>{item.desc}</Text>
            </View>
          ))}
        </View>

        {/* Featured Event Places */}
        <Text style={styles.sectionTitle}>Featured Event Places</Text>
        <View style={styles.featuredPlaces}>
          <View style={[styles.featuredCard, styles.selectedCard]}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/eventplaces/residencia.jpg')}
                style={styles.featuredImage}
              />
              <Ionicons name="cube" size={24} color="#ffffff" style={styles.cubeIcon} />
            </View>
            <Text style={styles.placeLabel}>Residencia Del Hamor</Text>
          </View>

          <View style={styles.featuredCard}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/eventplaces/lilias.jpg')}
                style={styles.featuredImage}
              />
              <Ionicons name="cube" size={24} color="#ffffff" style={styles.cubeIcon} />
            </View>
            <Text style={styles.placeLabel}>Fortune's Hall Event Center</Text>
          </View>
        </View>

        {/* Featured Events */}
        <Text style={styles.sectionTitle}>Featured Events</Text>
        {[
          { title: 'Johnson Wedding', date: 'May 15, 2025', color: '#00c2ff' },
          { title: 'Corporate Retreat', date: 'May 25, 2025', color: '#f9c74f' },
          { title: 'Birthday Celebration', date: 'June 3, 2025', color: '#ff6b6b' },
          { title: 'Johnson Wedding', date: 'May 15, 2025', color: '#00c2ff' },
        ].map((event, index) => (
          <View key={index} style={styles.eventCard}>
            <View style={styles.eventInfo}>
              <View style={[styles.dot, { backgroundColor: event.color }]} />
              <View>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDate}>{event.date}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddEvent')}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('DashboardScreen')}>
          <Ionicons name="home" size={24} color="#00686F" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
          <Ionicons name="calendar" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EventPlacesScreen')}>
          <Ionicons name="cube" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
          <Ionicons name="notifications" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Ionicons name="person" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Slide-in Menu */}
        {menuVisible && (
          <Pressable style={styles.overlay} onPress={closeMenu}>
            <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
              {/* Help Button */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  closeMenu();
                  // Add your help logic here (e.g., open Help screen or alert)
                  alert('For assistance, contact support@occasio.com');
                }}
              >
                <Ionicons name="help-circle-outline" size={22} color="#00686F" />
                <Text style={styles.menuText}>Help</Text>
              </TouchableOpacity>

              {/* Log Out Button */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  closeMenu();
                  navigation.replace('Landing');
                }}
              >
                <Ionicons name="log-out-outline" size={22} color="red" />
                <Text style={[styles.menuText, { color: 'red' }]}>Log Out</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        )}
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontFamily: 'LilyScriptOne',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00686F',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  weatherItem: {
    alignItems: 'center',
    width: 60,
  },
  weatherTemp: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  weatherDesc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  featuredPlaces: {
    marginBottom: 20,
  },
  featuredCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: 150,
  },
  cubeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#00686F',
    padding: 5,
    borderRadius: 20,
  },
  placeLabel: {
    padding: 10,
    fontWeight: '600',
    color: '#333',
  },
  eventCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    elevation: 2,
  },
  eventInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#00686F',
    borderRadius: 10,
    padding: 16,
    elevation: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    zIndex: 10,
  },
  menuContainer: {
    width: 200,
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 5,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#00686F',
    fontWeight: 'bold',
  },
});
