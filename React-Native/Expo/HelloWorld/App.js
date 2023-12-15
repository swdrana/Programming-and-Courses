import { useState } from "react";
import { Alert, Button, Image, Platform, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View,

} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={() => setCount(count + 1)}>
        My Count: {count} Rana Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam distinctio ducimus, nulla placeat alias,
        delectus maiores dolor vitae eligendi labore sint rerum facere quo
        doloribus illo quam ut!
      </Text>
      {/* <Image source={require("./assets/icon.png")}/> */}
      <TouchableWithoutFeedback onPress={() => setCount(count - 1)}>
        <Image
          source={{
            width: 100,
            height: 100,
            uri: "https://freeiconshop.com/wp-content/uploads/edd/png-flat.png",
          }}
        />
      </TouchableWithoutFeedback>
      <Button title="alert()" onPress={() => alert("Button Tapped")} />
      <Button
        title="Alert.alert()"
        color={"orange"}
        onPress={() => Alert.alert("My Title", "Alert Body", [
          {text:"YES", onPress: ()=>alert('Yes Clicked')},
          {text:"No"},
          {text:"Cancel"},
          {text:"Not Show"}
        ])}
      />
      {/* bellow btn not working in Android only for iOS  */}
      <Button
        title="Alert.promt() only for iOS"
        color={"green"}
        onPress={() => Alert.prompt("My Title", "Alert Body", (text)=>console.log(text))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin:15,
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
