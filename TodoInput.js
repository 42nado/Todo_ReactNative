import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,TextStyle} from 'react-native';
import {Feather} from '@expo/vector-icons'
export default function TodoInput(props) {
    const [text, setText] = useState(null);

    // Render
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
                style={{ flex: 1, height: 40, borderColor: 'lightblue', borderWidth: 3, borderRadius: 8 }}
                 placeholder='What needs to be done?'
                onChangeText={text => setText(text)}
                value={text}
            />
            <TouchableOpacity
                style={{marginLeft: 8, padding: 10, backgroundColor: '#26abff', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
                onPress={() => props.onPress(text)}>
                 <Feather name="plus" 
                size={16} 
                color="#f5f5f5"
                
                />

            </TouchableOpacity>
        </View>
    );
}