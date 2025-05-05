import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EventPlacesScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Event Places</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search event places..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Residencia */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ResidenciaScreen')}
          style={styles.featuredCard}
        >
          <Image
            source={require('../assets/eventplaces/residencia.jpg')}
            style={styles.featuredImage}
          />
          <Ionicons name="cube" size={24} color="#ffffff" style={styles.cubeIcon} />
          <Text style={styles.placeLabel}>Residencia Del Hamor</Text>
        </TouchableOpacity>

        {/* Fortune's Hall */}
        <TouchableOpacity
          onPress={() => navigation.navigate('FortuneScreen')}
          style={styles.featuredCard}
        >
          <Image
            source={require('../assets/eventplaces/fortune.jpg')}
            style={styles.featuredImage}
          />
          <Ionicons name="cube" size={24} color="#ffffff" style={styles.cubeIcon} />
          <Text style={styles.placeLabel}>Fortune's Hall Event Center</Text>
        </TouchableOpacity>

        {/* Lilia's Hall */}
        <TouchableOpacity
          onPress={() => navigation.navigate('LiliasScreen')}
          style={styles.featuredCard}
        >
          <Image
            source={require('../assets/eventplaces/lilias.jpg')}
            style={styles.featuredImage}
          />
          <Ionicons name="cube" size={24} color="#ffffff" style={styles.cubeIcon} />
          <Text style={styles.placeLabel}>Lilia's Function Hall</Text>
        </TouchableOpacity>
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
          <Ionicons name="cube" size={24} color="#00686F" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
          <Ionicons name="notifications" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Ionicons name="person" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventPlacesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginHorizontal: 16,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  featuredCard: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
  },
  cubeIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#00000080',
    padding: 6,
    borderRadius: 20,
  },
  placeLabel: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
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