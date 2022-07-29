import React from 'react';
import {Text,View,CheckBox, TouchableOpacity,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons'
export default function TodoItem(props) {
    // Update style according to props
    let style = props.item.completed ? {
        textDecorationLine: 'line-through'

    } : {
        textDecorationLine: 'none'
    }
    
    return (
        <TouchableOpacity
            onPress={() => props.completeFunction()}
            style={{paddingVertical: 8, flexDirection: 'center', justifyContent: 'space-between'}}>
           <View style={styles.container}>

            <Text style={[{paddingLeft: 2 ,fontSize: 18, fontWeight: "bold",marginTop:9, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}, style]}>{props.item.text}</Text>
            
             
            <TouchableOpacity
                style={{padding: 7, backgroundColor: '#26abff', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
                onPress={() => props.deleteFunction()}>
                <Feather name="trash" 
                size={20} 
                color="#f5f5f5"
                />
            </TouchableOpacity>
            
            </View>
        </TouchableOpacity>
    );
    
}
const styles = StyleSheet.create({
 container: {
   flexDirection: "row",
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "space-between"
  },


});


