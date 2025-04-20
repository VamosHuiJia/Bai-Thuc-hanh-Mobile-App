import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const categories = [
  { title: 'Fresh Fruits & Vegetable', image: require('../../assets/Images/Fruits.png'), backgroundColor: '#E9F7EF' },
  { title: 'Cooking Oil & Ghee', image: require('../../assets/Images/Oil.png'), backgroundColor: '#FEF5E7' },
  { title: 'Meat & Fish', image: require('../../assets/Images/Meat.png'), backgroundColor: '#FDEDEC' },
  { title: 'Bakery & Snacks', image: require('../../assets/Images/Snack.png'), backgroundColor: '#F3E8FF' },
  { title: 'Dairy & Eggs', image: require('../../assets/Images/Eggs.png'), backgroundColor: '#FEFCE8' },
  { title: 'Beverages', image: require('../../assets/Images/Beverages.png'), backgroundColor: '#E0F7FA' },
];

export default function ExploreScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} 
    >
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={styles.title}>Find Products</Text>

        {/* Thanh tìm kiếm với icon */}
        <TouchableOpacity style={styles.searchBar}>
          <Image
            source={require('../../assets/Images/Search_icon.png')} 
            style={styles.searchIcon}
            resizeMode="contain"
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor="#888"
          />
        </TouchableOpacity>

        <View style={styles.grid}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.box, { backgroundColor: item.backgroundColor }]} // Áp dụng màu nền theo danh mục
              onPress={() => {
                if (item.title === 'Beverages') {
                  navigation.navigate('Beverages');
                }
              }}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
    marginTop: 50, 
    textAlign: 'center', 
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  box: {
    width: '47%',
    borderRadius: 18,
    padding: 14,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
});