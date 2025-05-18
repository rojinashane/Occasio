import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CalendarScreen = ({ navigation }) => {
  const selectedDates = ['27', '30'];
  const today = '20';

  return (
    <View style={styles.container}>
      {/* Month and Year */}
      <View style={styles.header}>
        <Text style={styles.year}>2025</Text>
        <View style={styles.monthTabs}>
          {['May', 'Jun', 'Jul', 'Aug'].map((month, index) => (
            <TouchableOpacity key={index}>
              <Text
                style={[
                  styles.monthText,
                  month === 'May' && styles.selectedMonth,
                ]}
              >
                {month}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Calendar Grid */}
      <View style={styles.calendar}>
        <View style={styles.weekDays}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
            <Text key={day} style={styles.weekDayText}>
              {day}
            </Text>
          ))}
        </View>
        <View style={styles.datesGrid}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View key={`empty-${index}`} style={styles.dateCell} />
          ))}
          {Array.from({ length: 31 }, (_, i) => {
            const day = i + 1;
            const dayStr = day.toString();
            const isSelected = selectedDates.includes(dayStr);
            const isToday = dayStr === today;

            return (
              <View
                key={day}
                style={[
                  styles.dateCell,
                  isSelected && styles.selectedDateCell,
                  isToday && styles.todayCell,
                ]}
              >
                <Text
                  style={[
                    styles.dateText,
                    isSelected && styles.selectedDateText,
                    isToday && styles.todayText,
                  ]}
                >
                  {day}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* Events List */}
      <View style={styles.eventList}>
        <View style={styles.eventItem}>
          <Text style={styles.eventDate}>27</Text>
          <View>
            <Text style={styles.eventTitle}>John and Emily's Wedding</Text>
            <Text style={styles.eventDetails}>1:00 PM</Text>
            <Text style={styles.eventDetails}>Residencia Del Hamor</Text>
          </View>
        </View>
        <View style={styles.eventItem}>
          <Text style={styles.eventDate}>30</Text>
          <View>
            <Text style={styles.eventTitle}>Corporate Retreat</Text>
            <Text style={styles.eventDetails}>6:00 PM</Text>
            <Text style={styles.eventDetails}>Fortune’s Hall Event Center</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('DashboardScreen')}>
          <Ionicons name="home" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
          <Ionicons name="calendar" size={24} color="#00686F" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EventPlaces')}>
          <Ionicons name="cube" size={24} color="#666" />
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

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 10,
  },
  year: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  monthTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,
  },
  monthText: {
    fontSize: 16,
    color: '#888',
  },
  selectedMonth: {
    color: '#00686F',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#00686F',
    paddingBottom: 2,
  },
  calendar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekDayText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    width: 25,
    textAlign: 'center',
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateCell: {
    width: `${100 / 7}%`,
    alignItems: 'center',
    marginVertical: 4,
    paddingVertical: 6,
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  selectedDateCell: {
    backgroundColor: '#00686F',
    borderRadius: 20,
  },
  selectedDateText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todayCell: {
    borderWidth: 1.5,
    borderColor: '#00686F',
    borderRadius: 20,
  },
  todayText: {
    fontWeight: 'bold',
    color: '#00686F',
  },
  eventList: {
    backgroundColor: '#00686F',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    flex: 1,
  },
  eventItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  eventDate: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 15,
  },
  eventTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDetails: {
    color: '#D0F2F3',
    fontSize: 13,
    marginTop: 2,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});
