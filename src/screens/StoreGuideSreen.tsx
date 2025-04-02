import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthStack';

type Props = {
  navigation: NativeStackNavigationProp<AuthStackParamList, "StoreGuide">;
};

const StoreGuideScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => console.log('Open Menu')}>
          <FontAwesome name="home" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Main Title with Logo */}
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>Partner with</Text>
          <Image source={require('../assets/logo.png')} style={styles.bigLogo} />
        </View>

        <Text style={styles.subtitle}>
          Expand your business & reach new customers effortlessly!
        </Text>

        {/* Required Documents Section */}
        <Text style={styles.sectionTitle}>Documents Required</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📜 FSSAI License</Text>
          <Text style={styles.cardContent}>
            A valid Food Safety and Standards Authority of India license is mandatory.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧾 GST Registration</Text>
          <Text style={styles.cardContent}>
            A GSTIN is required for tax compliance and billing purposes.
          </Text>
        </View>

        {/* Why Partner With Us */}
        <Text style={styles.sectionTitle}>Why Partner With Us?</Text>
        <View style={styles.benefitsContainer}>
          <Text style={styles.benefit}>🚀 Attract New Customers</Text>
          <Text style={styles.benefit}>📦 Hassle-Free Delivery</Text>
          <Text style={styles.benefit}>💰 Boost Your Earnings</Text>
          <Text style={styles.benefit}>📊 Real-Time Order Tracking</Text>
        </View>

        {/* FAQs */}
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>⏳ How long does registration take?</Text>
          <Text style={styles.cardContent}>
            The registration process typically takes 2-3 business days.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>💸 Is there a registration fee?</Text>
          <Text style={styles.cardContent}>
            No, signing up as a partner is completely free!
          </Text>
        </View>
      </ScrollView>

      {/* Footer Button - Register Now */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StoreRegisterStep1')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 4,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  logo: {
    width: 140,
    height: 50,
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 90, // To prevent overlap with fixed header
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  bigLogo: {
    width: 200,
    height: 55,
    marginTop: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#007bff',
  },
  cardContent: {
    fontSize: 14,
    color: '#555',
  },
  benefitsContainer: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  benefit: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007bff',
    marginBottom: 6,
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 3,
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default StoreGuideScreen;
