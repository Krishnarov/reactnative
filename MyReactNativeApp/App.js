import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header Section */}
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.profileSection}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={30} color="#fff" />
            </View>
            <View style={styles.greetingSection}>
              <Text style={styles.greetingText}>Ram Ram bhai! 🙏</Text>
              <Text style={styles.subGreeting}>Welcome to mobile development</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <LinearGradient
            colors={['#ff9a9e', '#fecfef']}
            style={styles.welcomeGradient}
          >
            <Text style={styles.welcomeTitle}>🚀 Mobile App Journey</Text>
            <Text style={styles.welcomeDescription}>
              Your adventure in mobile development starts here!
            </Text>
          </LinearGradient>
        </View>

        {/* Feature Cards */}
        <View style={styles.featuresGrid}>
          <TouchableOpacity style={styles.featureCard}>
            <LinearGradient
              colors={['#a8edea', '#fed6e3']}
              style={styles.featureGradient}
            >
              <Ionicons name="code-slash" size={30} color="#333" />
              <Text style={styles.featureTitle}>Learn Code</Text>
              <Text style={styles.featureDescription}>Master React Native</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <LinearGradient
              colors={['#ffecd2', '#fcb69f']}
              style={styles.featureGradient}
            >
              <Ionicons name="rocket" size={30} color="#333" />
              <Text style={styles.featureTitle}>Build Apps</Text>
              <Text style={styles.featureDescription}>Create amazing UIs</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <LinearGradient
              colors={['#a8c8ec', '#a8c8ec']}
              style={styles.featureGradient}
            >
              <Ionicons name="trophy" size={30} color="#333" />
              <Text style={styles.featureTitle}>Achieve Goals</Text>
              <Text style={styles.featureDescription}>Reach new heights</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <LinearGradient
              colors={['#d299c2', '#fef9d7']}
              style={styles.featureGradient}
            >
              <Ionicons name="people" size={30} color="#333" />
              <Text style={styles.featureTitle}>Community</Text>
              <Text style={styles.featureDescription}>Connect with devs</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Progress Section */}
        <View style={styles.progressSection}>
          <Text style={styles.progressTitle}>Your Progress</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.progressText}>25% Complete - Keep going!</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.primaryButton}>
            <LinearGradient
              colors={['#667eea', '#764ba2']}
              style={styles.buttonGradient}
            >
              <Text style={styles.primaryButtonText}>Start Learning</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>View Projects</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50+</Text>
            <Text style={styles.statLabel}>Components</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Motivation</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  greetingSection: {
    flex: 1,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subGreeting: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  notificationIcon: {
    padding: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeCard: {
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  welcomeGradient: {
    padding: 25,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  welcomeDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  featureCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  featureGradient: {
    padding: 20,
    alignItems: 'center',
    minHeight: 120,
    justifyContent: 'center',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
  },
  featureDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  progressSection: {
    marginTop: 30,
    marginBottom: 25,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '25%',
    backgroundColor: '#667eea',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  actionButtons: {
    marginBottom: 30,
  },
  primaryButton: {
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  secondaryButton: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#667eea',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#667eea',
    fontSize: 16,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#667eea',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});