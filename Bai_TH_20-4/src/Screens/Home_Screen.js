import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const products = [
    {
      id: '1',
      name: 'Organic Bananas',
      description: '7pcs, Priceg',
      price: 4.99,
      image: require('../../assets/Images/Banana.png'),
      details: 'Bananas Are Nutritious. Bananas May Be Good For Weight Loss. Bananas May Be Good For Your Heart, As Part Of A Healthful And Varied Diet.',
    },
    {
      id: '2',
      name: 'Natural Red Apple',
      description: '1kg, Priceg',
      price: 4.99,
      image: require('../../assets/Images/Apples.png'),
      details: 'Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart, As Part Of A Healthful And Varied Diet.',
    },
  ];

  const bestSelling = [
    {
      id: '3',
      name: 'Chilies',
      description: '1kg, Priceg',
      price: 4.99,
      image: require('../../assets/Images/Chilies.png'),
      details: 'Chilies Are Spicy. They May Boost Metabolism. Chilies Are Rich In Antioxidants, As Part Of A Balanced Diet.',
    },
    {
      id: '4',
      name: 'Fruit',
      description: '1kg, Priceg',
      price: 4.99,
      image: require('../../assets/Images/Fruit.png'),
      details: 'Fruits Are Healthy. They Provide Essential Vitamins. Fruits Are Great For A Balanced Diet.',
    },
  ];

  const groceries = [
    {
      id: '5',
      name: 'Beef Bone',
      description: '1kg, Priceg',
      price: 4.99,
      image: require('../../assets/Images/BeefBone.png'),
      details: 'Beef Bones Are Rich In Nutrients. Great For Soups. High In Protein, As Part Of A Balanced Diet.',
    },
    {
      id: '6',
      name: 'Broiler Chicken',
      description: '1kg, Priceg',
      price: 4.99,
      image: require('../../assets/Images/BroilerChicken.png'),
      details: 'Chicken Is A Great Source Of Protein. Low In Fat. Perfect For A Healthy Meal.',
    },
  ];

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require('../../assets/Images/Carrot.png')}
            style={styles.headerIcon}
            resizeMode="contain"
          />
          <View style={styles.locationContainer}>
            <Image
              source={require('../../assets/Images/Address_point.png')}
              style={styles.addressIcon}
              resizeMode="contain"
            />
            <Text style={styles.locationText}>Dhaka, Banassre</Text>
          </View>
        </View>
      </View>

      {/* Thanh tìm kiếm với icon */}
      <TouchableOpacity style={styles.searchBar}>
        <Image
          source={require('../../assets/Images/Search_icon.png')}
          style={styles.searchIcon}
          resizeMode="contain"
        />
        <Text style={styles.searchText}>Search Store</Text>
      </TouchableOpacity>

      <View style={styles.banner}>
        <Image
          source={require('../../assets/Images/Banner.png')}
          style={styles.bannerImage}
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Exclusive Offer</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Selling</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={bestSelling}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Groceries</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.groceriesBanner}>
        <TouchableOpacity style={[styles.groceryBannerItem, styles.pulsesBackground]}>
          <Image
            source={require('../../assets/Images/Pulses.png')}
            style={styles.groceryBannerImage}
          />
          <Text style={styles.groceryBannerText}>Pulses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.groceryBannerItem, styles.riceBackground]}>
          <Image
            source={require('../../assets/Images/Rice.png')}
            style={styles.groceryBannerImage}
          />
          <Text style={styles.groceryBannerText}>Rice</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={groceries}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 45,
    padding: 15,
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10, 
  },
  searchText: {
    color: '#888',
    fontSize: 16,
    flex: 1, 
  },
  banner: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#2ecc71',
    fontSize: 14,
  },
  productList: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  productCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    width: 150,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productDescription: {
    fontSize: 12,
    color: '#888',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
  },
  groceriesBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  groceryBannerItem: {
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  pulsesBackground: {
    backgroundColor: '#FFE4C4',
  },
  riceBackground: {
    backgroundColor: '#E0F7FA',
  },
  groceryBannerImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  groceryBannerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;