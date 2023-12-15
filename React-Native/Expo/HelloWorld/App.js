import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={()=>setCount(count+1)}> {count} Rana Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio ducimus, nulla placeat alias, delectus maiores dolor vitae eligendi labore sint rerum facere quo doloribus illo quam ut! Illum iusto necessitatibus esse commodi, debitis velit expedita asperiores quibusdam perferendis, sequi autem soluta sed nulla, facilis aut! Nisi fugiat, at suscipit velit sint, distinctio dignissimos optio, accusantium laboriosam iste maxime nihil. Fugit delectus perferendis dolor est, sed ullam ad quia consequuntur quo eum culpa. Aliquid sint ab sit accusamus ea, animi temporibus ullam numquam cum consequatur dicta nostrum provident tempore eius expedita at blanditiis. Et aliquid ut cupiditate neque quibusdam libero!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
