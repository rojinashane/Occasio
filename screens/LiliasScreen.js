import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ResidenciaScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AR Venue Viewing</Text>
        <View style={{ width: 24 }} /> {/* Placeholder to center title */}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Venue Card */}
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../assets/eventplaces/lilias.jpg')}
              style={styles.image}
            />
            <TouchableOpacity
              style={styles.view3DButton}
              onPress={() => console.log('View 3D pressed')}
            >
              <Ionicons name="cube" size={16} color="#fff" />
              <Text style={styles.view3DText}>View in 3D</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.venueTitle}>Lilia's Function Hall</Text>
            <Text style={styles.capacity}>Capacity: 150 guest</Text>
            <Text style={styles.availableFor}>
              Available for Weddings, Corporate Events, Birthdays
            </Text>
            <View style={styles.locationRow}>
              <Ionicons name="location-sharp" size={14} color="#00686F" />
              <Text style={styles.locationText}>
              Ricacho Subdivision Barangay Road Bibincahan, Sorsogon,{' '}
                <Text style={{ color: '#00686F' }}>Philippines</Text>
              </Text>
            </View>
          </View>
        </View>

        {/* Venue Features */}
        <View style={styles.featuresCard}>
          <Text style={styles.featuresTitle}>Venue Features</Text>
          <View style={styles.featuresRow}>
            <View style={styles.featureItem}>
              <Ionicons name="wifi" size={18} color="#00686F" />
              <Text style={styles.featureText}>Free Wifi</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="car" size={18} color="#00686F" />
              <Text style={styles.featureText}>Parking Available</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="restaurant" size={18} color="#00686F" />
              <Text style={styles.featureText}>Catering Options</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="accessibility" size={18} color="#00686F" />
              <Text style={styles.featureText}>Accessible</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResidenciaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
  },
  view3DButton: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#00686F',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  view3DText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '500',
  },
  infoContainer: {
    padding: 12,
  },
  venueTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  capacity: {
    fontSize: 12,
    color: '#555',
  },
  availableFor: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#333',
    marginLeft: 4,
    flexShrink: 1,
  },
  featuresCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  featuresTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 12,
  },
  featuresRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 6,
    fontSize: 13,
    color: '#333',
  },
});