import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { LinearGradient } from "expo-linear-gradient";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Login done");
    } catch (error) {
      console.error(error);
      alert("Login error: ");
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Sign up done");
    } catch (error) {
      console.error(error);
      alert("signup error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={["#ff3200", "#000"]} style={styles.pageContainer}>
      <View style={styles.container}>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChange={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChange={(text) => setPassword(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0f0" />
        ) : (
          <>
            <Button title="Login" onPress={() => signIn()} />
            <Button title="Create Account" onPress={() => signUp()} />
          </>
        )}
      </View>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
    justifyContent: "center",
    flex: 1,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
