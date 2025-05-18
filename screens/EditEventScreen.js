import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Menu, Provider } from 'react-native-paper';

const AddEventScreen = () => {
  const navigation = useNavigation();
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [venue, setVenue] = useState('');
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [menuVisible, setMenuVisible] = useState(false);

  const validateFields = () => {
    const newErrors = {};
    if (!eventName.trim()) newErrors.eventName = 'Event Name is required';
    if (!eventDate) newErrors.eventDate = 'Date is required';
    if (!eventTime) newErrors.eventTime = 'Time is required';
    if (!eventType) newErrors.eventType = 'Event Type is required';
    return newErrors;
  };

  const handleCreateEvent = () => {
    const formErrors = validateFields();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      Alert.alert('Success', 'Event created successfully!');
    }
  };

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('EventInformationScreenJohn')}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Event</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Event Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Event Details</Text>

          <Text style={styles.label}>Event Name <Text style={{ color: 'red' }}>*</Text></Text>
          <TextInput
            style={styles.input}
            value={eventName}
            onChangeText={setEventName}
            placeholder="Enter event name"
          />
          {errors.eventName && <Text style={styles.errorText}>{errors.eventName}</Text>}

          <Text style={styles.label}>Date <Text style={{ color: 'red' }}>*</Text></Text>
          <View style={styles.iconAlignedWrapper}>
            {Platform.OS === 'web' ? (
              <input
                type="date"
                style={styles.webInput}
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            ) : (
              <TextInput
                style={styles.mobileInput}
                value={eventDate}
                placeholder="Select date"
                onChangeText={setEventDate}
              />
            )}
          </View>
          {errors.eventDate && <Text style={styles.errorText}>{errors.eventDate}</Text>}

          <Text style={styles.label}>Time <Text style={{ color: 'red' }}>*</Text></Text>
          <View style={styles.iconAlignedWrapper}>
            {Platform.OS === 'web' ? (
              <input
                type="time"
                style={styles.webInput}
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
              />
            ) : (
              <TextInput
                style={styles.mobileInput}
                value={eventTime}
                placeholder="Select time"
                onChangeText={setEventTime}
              />
            )}
          </View>
          {errors.eventTime && <Text style={styles.errorText}>{errors.eventTime}</Text>}

          <Text style={styles.label}>Venue</Text>
          <TextInput
            style={styles.input}
            value={venue}
            onChangeText={setVenue}
            placeholder="Enter venue"
          />

          <Text style={styles.label}>Event Type <Text style={{ color: 'red' }}>*</Text></Text>
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <TouchableOpacity
                onPress={() => setMenuVisible(true)}
                style={styles.dropdownWrapper}
              >
                <View style={styles.dropdownTouchable}>
                  <Text style={{ color: eventType ? '#000' : '#aaa' }}>
                    {eventType || 'Select Event Type'}
                  </Text>
                  <Ionicons name="chevron-down" size={20} color="#333" />
                </View>
              </TouchableOpacity>
            }
          >
            {['Wedding', 'Birthday', 'Corporate', 'Others'].map((type) => (
              <Menu.Item
                key={type}
                title={type}
                onPress={() => {
                  setEventType(type);
                  setMenuVisible(false);
                }}
              />
            ))}
          </Menu>
          {errors.eventType && <Text style={styles.errorText}>{errors.eventType}</Text>}
        </View>

        {/* Event Images & Attachments */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Event Images</Text>
          <TouchableOpacity style={styles.photoBox}>
            <Ionicons name="camera-outline" size={32} color="#00686F" />
            <Text style={{ color: '#00686F', marginTop: 6 }}>Add Photos</Text>
          </TouchableOpacity>

          <Text style={[styles.label, { marginTop: 16 }]}>Attachments</Text>
          <TouchableOpacity style={styles.attachmentBox}>
            <Ionicons name="attach-outline" size={24} color="#00686F" />
            <Text style={{ color: '#00686F', marginLeft: 8 }}>Add Attachment</Text>
          </TouchableOpacity>
        </View>

        {/* Submit */}
        <TouchableOpacity style={styles.createButton} onPress={handleCreateEvent}>
          <Text style={styles.createButtonText}>Edit Event</Text>
        </TouchableOpacity>
      </ScrollView>
    </Provider>
  );
};

export default AddEventScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00686F',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  iconAlignedWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#00686F',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  webInput: {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    fontSize: 16,
    color: '#333',
    backgroundColor: 'transparent',
    textAlign: 'left',
    padding: 5,
  },
  mobileInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  dropdownWrapper: {
    borderWidth: 1,
    borderColor: '#00686F',
    borderRadius: 8,
    marginBottom: 20,
    padding: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  dropdownTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 4,
    marginBottom: 8,
  },
  createButton: {
    backgroundColor: '#00686F',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  photoBox: {
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: '#00686F',
    borderRadius: 10,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  attachmentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#00686F',
    borderRadius: 10,
    padding: 16,
    marginTop: 6,
  },
});
