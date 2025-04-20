import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const beverages = [
  { id: '1', name: 'Diet Coke', size: '355ml, Price', price: 1.99, image: require('../../assets/Images/Coke.png') },
  { id: '2', name: 'Sprite Can', size: '325ml, Price', price: 1.50, image: require('../../assets/Images/sprite.png') },
  { id: '3', name: 'Apple Juice', size: '2L, Price', price: 15.99, image: require('../../assets/Images/juice_apple.png') },
  { id: '4', name: 'Orange Juice', size: '2L, Price', price: 15.99, image: require('../../assets/Images/juice_orange.png') },
  { id: '5', name: 'Coca Cola Can', size: '325ml, Price', price: 4.99, image: require('../../assets/Images/coca.png') },
  { id: '6', name: 'Pepsi Can', size: '330ml, Price', price: 4.99, image: require('../../assets/Images/pepsi.png') },
  { id: '7', name: 'Diet Coke', size: '355ml, Price', price: 1.99, image: require('../../assets/Images/Coke.png') },
  { id: '8', name: 'Sprite Can', size: '325ml, Price', price: 1.50, image: require('../../assets/Images/sprite.png') },
  { id: '9', name: 'Apple Juice', size: '2L, Price', price: 15.99, image: require('../../assets/Images/juice_apple.png') },
  { id: '10', name: 'Orange Juice', size: '2L, Price', price: 15.99, image: require('../../assets/Images/juice_orange.png') },
  { id: '11', name: 'Coca Cola Can', size: '325ml, Price', price: 4.99, image: require('../../assets/Images/coca.png') },
  { id: '12', name: 'Pepsi Can', size: '330ml, Price', price: 4.99, image: require('../../assets/Images/pepsi.png') },
];

export default function BeveragesScreen({ navigation }) {
  React.useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    return () => navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex' } });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.size}>{item.size}</Text>
        <View style={styles.priceButtonRow}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/Images/Back_icon.png')}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Beverages</Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/Images/Filter_icon.png')}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={beverages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 45,
    marginBottom: 16,
  },
  headerIcon: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  item: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  details: {
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 4,
  },
  size: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  priceButtonRow: {
    flexDirection: 'row', // Đặt giá và nút "+" trên cùng một hàng
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8, // Khoảng cách giữa giá và nút "+"
  },
  button: {
    backgroundColor: '#28a745',
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 24,
  },
});