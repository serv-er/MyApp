import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

type createUser = {
    email: string;
    password: string;
};

type loginUser = {
    email: string;
    password: string;
};

class FirebaseService {
    async createAccount({ email, password }: createUser) {
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            return userCredential;
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG,
            });
            console.log("FirebaseService -> createAccount -> error", error);
        }
    }

    async login({ email, password }: loginUser) {
        try {
            return await auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG,
            });
            console.log("FirebaseService -> login -> error", error);
        }
    }

    async getCurrentUser() {
        try {
            return auth().currentUser;
        } catch (error) {
            console.log("FirebaseService -> getCurrentUser -> error", error);
        }
    }

    async logout() {
        try {
            await auth().signOut();
        } catch (error) {
            console.log("FirebaseService -> logout -> error", error);
        }
    }
}

export default FirebaseService;
