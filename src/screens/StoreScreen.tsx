import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, ImageBackground, Animated, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from '../navigation/AuthStack';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../assets/16.png'),
    caption: '"Welcome to our app, start your journey with us!"'
  },
  {
    id: '2',
    image: require('../assets/17.png'),
    caption: '"Explore the amazing features designed for you."'
  },
  {
    id: '3',
    image: require('../assets/18.png'),
    caption: '"Stay connected and enjoy a seamless experience."'
  },
];

type Props = {
    navigation: NativeStackNavigationProp<AuthStackParamList, "Store">;
};

const StoreScreen = ({ navigation }: Props) => {
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    
    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % slides.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }: { item: (typeof slides)[0] }) => (
    <View style={styles.slideContainer}>
      <ImageBackground source={item.image} style={styles.imageBackground} resizeMode="cover">
        <Text style={styles.caption}>{item.caption}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View key={index} style={[styles.dot, currentIndex === index ? styles.activeDot : {}]} />
        ))}
      </View>
      {/* {loading && <ActivityIndicator size="large" color="#007bff" style={styles.loading} />} */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StoreLogin')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('StoreGuide')}>
          <Text style={styles.secondaryButtonText}>How to Register Your Store</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%', height: '100%', backgroundColor: 'white' },
  slideContainer: { width, height: height * 1.05, alignItems: 'center', justifyContent: 'center' },
  imageBackground: { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',paddingTop:200,  },
  caption: { fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center', top: 5,marginHorizontal:20 },
  pagination: { flexDirection: 'row', position: 'absolute', top: height * 0.72, alignSelf: 'center' },
  dot: { width: 8, height: 8, borderRadius: 6, backgroundColor: 'white', marginHorizontal: 5 },
  activeDot: { width: 20, height: 8, borderRadius: 4, backgroundColor: 'blue' },
  loading: { position: 'absolute', top: height * 0.5 },
  buttonsContainer: { position: 'absolute', bottom:0,paddingTop:30, width: '100%', alignItems: 'center' ,backgroundColor:"white",borderTopLeftRadius:20,borderTopRightRadius:30,height:"25%",},
  button: { backgroundColor: '#007bff', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 10, width: '80%', alignItems: 'center', marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  secondaryButton: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#007bff' },
  secondaryButtonText: { color: '#007bff', fontSize: 15, fontWeight: 'bold' },
});

export default StoreScreen;
