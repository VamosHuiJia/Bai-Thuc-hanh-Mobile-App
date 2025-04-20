import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addToFavorites, removeFromFavorites } from './Favorites_Screen'; // Import thêm removeFromFavorites

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Kiểm tra xem sản phẩm đã có trong danh sách yêu thích chưa
  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('@favorites');
        if (storedFavorites) {
          const favorites = JSON.parse(storedFavorites);
          const isFav = favorites.some((item) => item.id === product.id);
          setIsFavorite(isFav);
        }
      } catch (error) {
        console.error('Error checking favorite:', error);
      }
    };
    checkFavorite();
  }, [product.id]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  const toggleFavorite = async () => {
    if (isFavorite) {
      // Nếu đã là yêu thích, xóa khỏi danh sách
      await removeFromFavorites(product.id);
      setIsFavorite(false);
    } else {
      // Nếu chưa là yêu thích, thêm vào danh sách
      await addToFavorites(product);
      setIsFavorite(true);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/Images/Back_icon.png')}
              style={styles.headerIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/Download_icon.png')}
              style={styles.headerIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <Image
          source={product.image}
          style={styles.productImage}
          resizeMode="contain"
        />

        <View style={styles.productInfo}>
          <View style={styles.titleRow}>
            <Text style={styles.productName}>{product.name}</Text>
            <TouchableOpacity onPress={toggleFavorite}>
              <Image
                source={require('../../assets/Images/Favorite_icon.png')}
                style={[
                  styles.favoriteIcon,
                  { tintColor: isFavorite ? 'red' : '#888' },
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.productDescription}>{product.description}</Text>
          <View style={styles.quantityPriceRow}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decreaseQuantity}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.productPrice}>${totalPrice}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <TouchableOpacity>
              <Text style={styles.arrow}>▼</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionContent}>{product.details}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <View style={styles.nutritionsTag}>
              <Text style={styles.nutritionsText}>100gr</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.arrow}>▶</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Review</Text>
            <Text style={styles.stars}>★★★★★</Text>
            <TouchableOpacity>
              <Text style={styles.arrow}>▶</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles giữ nguyên
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerIcon: {
    width: 20,
    height: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  productInfo: {
    paddingHorizontal: 15,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  favoriteIcon: {
    width: 24,
    height: 24,
  },
  productDescription: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  quantityPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  quantityButton: {
    fontSize: 24,
    paddingHorizontal: 10,
    color: '#53B175',
  },
  quantityText: {
    fontSize: 18,
    paddingHorizontal: 15,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 16,
    color: '#888',
  },
  sectionContent: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  nutritionsTag: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  nutritionsText: {
    fontSize: 12,
    color: '#888',
  },
  stars: {
    fontSize: 16,
    color: '#FFD700',
  },
  addButton: {
    backgroundColor: '#53B175',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;