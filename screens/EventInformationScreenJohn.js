import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Menu, Provider } from 'react-native-paper';

const EventInformationScreenJohn = () => {
  const navigation = useNavigation();

  const [eventName, setEventName] = useState("John and Emily's Wedding");
  const [eventDate, setEventDate] = useState('May 27, 2025');
  const [eventTime, setEventTime] = useState('1:00 PM');
  const [eventType, setEventType] = useState('Wedding');
  const [description, setDescription] = useState('A day to cherish our new journey together.');

  const [venue] = useState('Residencia Del Hamor');
  const [venueImage] = useState(require('../assets/eventplaces/residencia.jpg'));
  const [capacity] = useState(200);
  const [availableFor] = useState('Weddings, Corporate Events');
  const [location] = useState('Unnamed Rd, Caguitan, Sanrogan, Philippines');

  const attending = 60;
  const notAttending = 15;
  const pending = 25;
  const totalInvites = attending + notAttending + pending;

  const [menuVisible, setMenuVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const openEditModal = () => {
    setEditModalVisible(false);
    navigation.navigate('EditEventScreen');
  };

  const openDeleteModal = () => {
    setDeleteModalVisible(true);
    closeMenu();
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const confirmDelete = () => {
    console.log("Event Deleted");
    setDeleteModalVisible(false);
  };

  const [tasks, setTasks] = useState([]);
  const [taskError, setTaskError] = useState('');

  const addTask = () => {
    setTasks([...tasks, { name: '', status: 'Planning', menuVisible: false }]);
    setTaskError('');
  };

  const updateTask = (index, key, value) => {
    const updated = [...tasks];
    updated[index][key] = value;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const validateTask = (name) => name.trim().length > 0;

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Event Information</Text>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            contentStyle={{ backgroundColor: '#fff' }} // white background
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <MaterialIcons name="more-vert" size={24} color="#333" />
              </TouchableOpacity>
            }
          >
            <Menu.Item
              onPress={openEditModal}
              title="Edit Event"
              titleStyle={[styles.menuItemText, { color: '#00686F'}]}
              style={{ backgroundColor: '#fff' }} // white background
            />
            <Menu.Item
              onPress={openDeleteModal}
              title="Delete Event"
              titleStyle={[styles.menuItemText, { color: 'red' }]}
              style={{ backgroundColor: '#fff' }} // white background
            />
          </Menu>

        </View>

        {/* Event Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Event Details</Text>
          <DetailRow label="Event Name" value={eventName} />
          <DetailRow label="Date" value={eventDate} />
          <DetailRow label="Time" value={eventTime} />
          <DetailRow label="Type" value={eventType} />
          <DetailRow label="Description" value={description} />
        </View>

        {/* Venue */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Event Venue</Text>
          <Image source={venueImage} style={styles.venueImage} />
          <Text style={styles.venueName}>{venue}</Text>
          <Text style={styles.venueInfo}>Capacity: {capacity} guests</Text>
          <Text style={styles.venueInfo}>Available for: {availableFor}</Text>
          <Text style={styles.venueLocation}>{location}</Text>
          <TouchableOpacity style={styles.view3dButton}>
            <Ionicons name="cube-outline" size={16} color="#00686F" />
            <Text style={styles.view3dText}>View in 3D</Text>
          </TouchableOpacity>
        </View>

        {/* To-Do List */}
<View style={styles.card}>
          <Text style={styles.sectionTitle}>Event To-Do List</Text>

          {tasks.map((task, index) => (
            <View key={index} style={styles.todoRow}>
              <TextInput
                style={styles.todoInput}
                placeholder="Task Name"
                value={task.name}
                onChangeText={(text) => {
                  const updated = [...tasks];
                  updated[index].name = text;
                  setTasks(updated);
                }}
              />
              <Menu
                visible={task.menuVisible || false}
                onDismiss={() => {
                  const updated = [...tasks];
                  updated[index].menuVisible = false;
                  setTasks(updated);
                }}
                anchor={
                  <TouchableOpacity
                    style={styles.todoDropdown}
                    onPress={() => {
                      const updated = [...tasks];
                      updated[index].menuVisible = true;
                      setTasks(updated);
                    }}
                  >
                    <Text>{task.status}</Text>
                    <Ionicons name="chevron-down" size={16} color="#333" />
                  </TouchableOpacity>
                }
              >
                {['Planning', 'In Progress', 'Done'].map((status) => (
                  <Menu.Item
                    key={status}
                    title={status}
                    onPress={() => {
                      const updated = [...tasks];
                      updated[index].status = status;
                      updated[index].menuVisible = false;
                      setTasks(updated);
                    }}
                  />
                ))}
              </Menu>
              <TouchableOpacity
                style={styles.todoDeleteButton}
                onPress={() => {
                  const updated = tasks.filter((_, i) => i !== index);
                  setTasks(updated);
                }}
              >
                <Ionicons name="close" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}

          <TouchableOpacity
            style={styles.todoAddButtonFull}
            onPress={() =>
              setTasks([...tasks, { name: '', status: 'Planning', menuVisible: false }])
            }
          >
            <Ionicons name="add-circle-outline" size={20} color="#00686F" />
            <Text style={styles.todoAddButtonText}>Add Task</Text>
          </TouchableOpacity>

        </View>


        {/* RSVP */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>RSVP Summary</Text>
          <Text style={styles.rsvpText}>Total Invites: {totalInvites}</Text>
          <Text style={styles.rsvpText}>Attending: {attending}</Text>
          <Text style={styles.rsvpText}>Not Attending: {notAttending}</Text>
          <Text style={styles.rsvpText}>Pending: {pending}</Text>
        </View>

        {/* Delete Confirmation Modal */}
        <Modal
          visible={deleteModalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={closeDeleteModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Are you sure you want to delete this event?</Text>
              <View style={styles.modalActions}>
                <TouchableOpacity style={styles.modalButton} onPress={closeDeleteModal}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtondelete} onPress={confirmDelete}>
                  <Text style={styles.modalButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </Provider>
  );
};

const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

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
    marginBottom: 12,
    color: '#333',
  },
  detailRow: {
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
  venueImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  venueName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  venueInfo: {
    fontSize: 12,
    color: '#555',
    marginBottom: 2,
  },
  venueLocation: {
    fontSize: 12,
    color: '#00686F',
    marginBottom: 12,
  },
  view3dButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#e6f7f5',
    borderRadius: 8,
  },
  view3dText: {
    color: '#00686F',
    marginLeft: 4,
    fontWeight: '600',
    fontSize: 12,
  },
  addFieldButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  addFieldText: {
    color: '#00686F',
    marginLeft: 6,
    fontWeight: '600',
  },
  todoTextInputRow: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  invalidInput: {
    borderColor: 'red',
  },
  todoRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 12,
  gap: 8,
},


todoInput: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#e53935', // red border for empty/initial state
  borderRadius: 8,
  padding: 10,
  backgroundColor: 'white',
},

todoDropdown: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
  paddingVertical: 6,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  backgroundColor: 'white',
  minWidth: 120,
  justifyContent: 'space-between',
},

todoDeleteButton: {
  backgroundColor: '#e53935',
  padding: 8,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
},

todoAddButtonFull: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingVertical: 10,
  paddingHorizontal: 16,
  marginTop: 10,
},

todoAddButtonText: {
  color: '#00686F',
  marginLeft: 6,
  fontSize: 16,
  fontWeight: '600',
},
modalBackground: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContainer: {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 10,
  width: '80%',
  alignItems: 'center',
},

modalTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 20,
  textAlign: 'center',
},

modalActions: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
},

modalButton: {
  flex: 1,
  paddingVertical: 10,
  marginHorizontal: 5,
  backgroundColor: '#00686F',
  borderRadius: 8,
  alignItems: 'center',
},

modalButtondelete: {
  flex: 1,
  paddingVertical: 10,
  marginHorizontal: 5,
  backgroundColor: '#FF0000',
  borderRadius: 8,
  alignItems: 'center',
},

modalButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},

});

export default EventInformationScreenJohn;
