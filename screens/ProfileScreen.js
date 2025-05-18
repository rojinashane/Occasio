import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const user = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    image: require('../assets/profile/profile.jpg'),
  };

  const upcomingEvents = [
    {
      id: 1,
      name: "John and Emily's Wedding",
      date: 'May 27, 2025',
      time: '1:00 PM',
      location: 'Residencia Del Hamor',
    },
    {
      id: 2,
      name: 'Corporate Retreat',
      date: 'May 30, 2025',
      time: '6:00 AM',
      location: 'Lilias Function Hall',
    },
    {
      id: 3,
      name: 'Missy at 18',
      date: 'June 10, 2025',
      time: '6:00 PM',
      location: 'Residencia Del Hamor',
    },
  ];

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const handleEventPress = (event) => {
    switch (event.name) {
      case "John and Emily's Wedding":
        navigation.navigate('EventInformationScreenJohn', { event });
        break;
      case 'Corporate Retreat':
        navigation.navigate('EventInformationScreenCorporate', { event });
        break;
      case 'Missy at 18':
        navigation.navigate('EventInformationScreenMissy', { event });
        break;
      default:
        navigation.navigate('EventInformation', { event });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topRight}>
          <TouchableOpacity onPress={toggleMenu}>
            <Entypo name="dots-three-vertical" size={22} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <Image source={user.image} style={styles.profileImage} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Ionicons name="calendar-outline" size={20} color="#00686F" />
            <Text style={styles.infoText}>
              {upcomingEvents.length} Upcoming Events
            </Text>
          </View>
        </View>

        <View style={styles.eventsSection}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          {upcomingEvents.map((event) => (
            <TouchableOpacity
              key={event.id}
              style={styles.eventCard}
              onPress={() => handleEventPress(event)}
            >
              <View style={styles.eventCardHeader}>
                <Text style={styles.eventTitle}>{event.name}</Text>
                <Ionicons name="chevron-forward" size={18} color="#999" />
              </View>
              <View style={styles.eventDetails}>
                <Ionicons name="calendar" size={16} color="#00686F" />
                <Text style={styles.detailText}>{event.date}</Text>
              </View>
              <View style={styles.eventDetails}>
                <Ionicons name="time" size={16} color="#00686F" />
                <Text style={styles.detailText}>{event.time}</Text>
              </View>
              <View style={styles.eventDetails}>
                <Ionicons name="location" size={16} color="#00686F" />
                <Text style={styles.detailText}>{event.location}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu Modal */}
        <Modal
          transparent
          animationType="fade"
          visible={menuVisible}
          onRequestClose={() => setMenuVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setMenuVisible(false)}
          >
            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  alert('Edit Profile coming soon!');
                }}
              >
                <Text style={styles.menuText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('DashboardScreen')}>
          <Ionicons name="home" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
          <Ionicons name="calendar" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EventPlaces')}>
          <Ionicons name="cube" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
          <Ionicons name="notifications" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Ionicons name="person" size={24} color="#00686F" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  topRight: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  infoSection: {
    width: '100%',
    marginVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#444',
  },
  eventsSection: {
    width: '100%',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  eventCard: {
    backgroundColor: '#f2fefe',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  eventCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00686F',
  },
  eventDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  detailText: {
    fontSize: 14,
    color: '#444',
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 20,
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    width: 150,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#00686F',
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
});
