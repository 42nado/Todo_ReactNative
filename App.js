
import React, {useState} from 'react';
import { Button, View, Text, SafeAreaView,StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function HomeScreen({ navigation }) {
  return (
    <View style={{ margin: 30,flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ width: 200}}>
      <Button

        title="Add todo"
        
        onPress={() => navigation.navigate('.')}
      />       
      </View>
    </View>
  );
}

function DetailsScreen() {
  const [todoItems, setTodoItems] = useState([{text: "Buy groceries", completed: true}, {text: "Make blogpost", completed: false}]);

    // Add a new item to the state
    function addTodoItem(_text) {
      var d = new Date()
        setTodoItems([...todoItems, {text:_text, completed: false}]);
    }

    // Delete an item from state by index
    function deleteTodoItem(_index){
        let tempArr = [...todoItems];
        tempArr.splice(_index, 1);
        setTodoItems(tempArr)
    }

    // Function to set completed to true by index.
    function completeTodoItem(_index){
        let tempArr = [...todoItems];
        tempArr[_index].completed = true;
        setTodoItems(tempArr)
    }

    // Render
    return (
        <>
          
            <StatusBar barStyle={"light-content"} backgroundColor={"#212121"}/>
            <SafeAreaView style={{padding: 16, justifyContent: 'space-between', flex: 1, backgroundColor: '#F7F7F7'}}>
              <View style={styles.header}>     
              <Text style={styles.title}>ToDo List </Text>
              </View>
             <View style={styles.container}>
 

    </View>
              <FlatList
                    data={todoItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                          <View style={styles.container}>
                            <TodoItem
                           
                                item={item}
                                deleteFunction={() => deleteTodoItem(index)}
                                completeFunction={() => completeTodoItem(index)}
                           
                            />
                            </View>
                        )
                    }}
                />
                <TodoInput onPress={addTodoItem} />
            </SafeAreaView>
        </>
    );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="." component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
header: {
        height: 60,
        paddingTop: 10,
        borderRadius: 8,
        backgroundColor: '#26abff'
},
title: {
        flex: 1,
        textAlign: 'left',
        color: '#fff',
        paddingLeft: 10,
        fontSize: 26,
        fontWeight: 'bold',
        fontStyle: 'italic'
},


});

