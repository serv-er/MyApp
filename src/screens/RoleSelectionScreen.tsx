import React, { useRef, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Animated, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, Button } from 'react-native';
//import Svg, { Path } from 'react-native-svg';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from '../navigation/AuthStack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../assets/20.png'),
    heading: 'SHOP OWNER',
    caption: "Sell & Grow Your Business",
    buttons: [{ text: "SHOP OWNER", screen: "Store" }],
    style: 'illustratorStyle1',
  },
  {
    id: '2',
    image: require('../assets/customer.png'),
    heading: 'CUSTOMER',
    caption: "Shop from Local Stores",
    buttons: [{ text: "CUSTOMER", screen: "Customer" }],
    style: 'illustratorStyle2',
  },
  {
    id: '3',
    image: require('../assets/delivery.png'),
    heading: 'DELIVERY PERSON',
    caption: "Earn By delivering Order",
    buttons: [{ text: "DELIVERY PARTNER", screen: "Delivery" }],
    style: 'illustratorStyle3',
  },
];

type Props = {
  navigation: NativeStackNavigationProp<AuthStackParamList, "RoleSelection">;
};

const RoleSelection = ({ navigation }: Props) => {
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % slides.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);
const borderRadius=10;
  const renderItem = ({ item }: { item: (typeof slides)[0] }) => (
    <View style={styles.slide}>
      {/* Curved Background SVG */}
      <View style={styles.curvedBackgroundContainer}>
        {/* <Svg width={width} height={height * 0.46} viewBox={`0 0 ${width} ${height * 0.51}`} style={styles.svg}>
    <Path
      d={`
        M ${borderRadius} ${height * 0.4} 
        Q ${width * 0.8} ${height * 0.4}, ${width * 1} ${height * 0.4} 
        Q ${width * 1} ${height * 0.35}, ${width - borderRadius} ${height * 0.35}
        A ${borderRadius} ${borderRadius} 0 0 0 ${width} ${height * 0.35 - borderRadius}
        V ${borderRadius} 
        A ${borderRadius} ${borderRadius} 0 0 0 ${width - borderRadius} 0
        H ${borderRadius} 
        A ${borderRadius} ${borderRadius} 0 0 0 0 ${borderRadius}
        V ${height * 0.38 - borderRadius} 
        A ${borderRadius} ${borderRadius} 0 0 0 ${borderRadius} ${height * 0.38}
        Z
      `}
      fill="#E4E2E1"
    />

   </Svg> */}
        {/* Sliding Heading & Caption */}
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{item.heading}</Text>
          <Text style={styles.caption}>{item.caption}</Text>
          {item.buttons.map((button, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => navigation.navigate(button.screen as keyof AuthStackParamList)}>
              <Text style={styles.buttonText1}>Register as {item.heading}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Image Positioned within SVG */}
     <Image source={item.image} style={styles[item.style as keyof typeof styles] as any} />
      </View>

      {/* Buttons Below SVG */}
      <View style={styles.buttonsContainer}>
        {item.buttons.map((button, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(button.screen as keyof AuthStackParamList)}>
     <View>
              <Ionicons name="arrow-back" size={20} color="#fff" style={styles.arrow} />
              <Text style={styles.buttonText}>{button.text}</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" style={styles.arrow} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonsContainerForSkip}>



        <TouchableOpacity style={styles.buttonForSkip}>
          <Text style={styles.buttonTextForSkip}>Skip & Browse</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>




        <Text style={styles.bottomText}>Already have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(`${item.buttons[0].screen}Login` as keyof AuthStackParamList)}>
          <Text style={[styles.bottomText, styles.loginText]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>

  );

  return (
    <ImageBackground style={styles.background}>
      {/* New Heading at the Top */}
      <View style={styles.topHeadingContainer}>
        <Text style={styles.topHeading}>WELCOME TO THE LOGO</Text>
        <Text style={styles.topCaption}>Choose Your <Text style={styles.highlight}>role</Text> to get Started</Text>
      </View>

      {/* Sliding Content */}
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
       
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%', },
  topHeadingContainer: { position: 'absolute', top: 50, width: '100%', alignItems: 'center' },
  topHeading: { fontSize: 30, fontWeight: 'bold', color: '#F85A3E' },
  slide: { width, height, alignItems: 'center', justifyContent: 'center' },
  curvedBackgroundContainer: { 
    position: 'absolute',
    backgroundColor:"#E4E2E1", 
    top: 200, 
    width: width * 0.9, // Reduce width slightly to create spacing
    height: 300, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: width * 0.05, // Adds spacing on both left and right sides
  },
  buttonsContainerForSkip:{ position: 'absolute', bottom: 130, width: '100%', alignItems: 'center' },
  buttonForSkip: { 
    width: "70%", 
    
    backgroundColor: "transparent",  // Set background to transparent
    paddingVertical: 10, 
    alignItems: "center", 
    borderRadius: 25, 
    marginTop: 10, 
    marginBottom: 30, 
    borderWidth: 1,  // Set border width to make it visible
    borderColor: "#F85A3E",  // Apply the border color
    borderStyle: "solid",
  }
,  
buttonTextForSkip:{ color: '#F85A3E', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#333', textAlign: 'left' },
  textContainer: { position: 'absolute', left: 20, top: '30%', justifyContent: 'flex-start', width: width * 0.4, padding: 10 },
  caption: { fontSize: 16, fontWeight: '600', color: '#C9A40D' },
  illustratorStyle1: { position: 'absolute', left: 40, bottom:"-17%", width: width * 1.18, height: height * 0.6, resizeMode: 'contain' },
  illustratorStyle2: { position: 'absolute', right: 5, top: '-23%', width: width * 0.5, height: height * 0.45, resizeMode: 'contain' },
  illustratorStyle3: { position: 'absolute', left: 150, top: '-40%', width: width * 0.6, height: height * 0.55, resizeMode: 'contain' },
  button: { width: "90%", backgroundColor: "#F85A3E", paddingVertical: 10, alignItems: "center", borderRadius: 10, marginTop: 10, marginBottom: 30 },
  buttonsContainer: { position: 'absolute', bottom: 250, width: '100%', alignItems: 'center' },
  buttonText: { color: '#7F4E1D', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  buttonText1: { color: 'white', fontSize: 10, fontWeight: 'bold', textAlign: 'center', padding: 5 },
  arrow: { paddingHorizontal: 10 },
  svg: { marginHorizontal: 20 },
  topCaption:{
    fontSize:18,
    fontWeight:"bold",
    color:"#7F4E1D",
  },
  highlight: {
    color: "#F85A3E", // Highlight the word "Start"
    fontWeight: "bold",
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bottomText: {
    fontSize: 16,
    color: '#7F4E1D',
    fontWeight: 'bold',
  },
  loginText: {
    color: '#F85A3E', // Highlight the Login text
  },
});

export default RoleSelection;
