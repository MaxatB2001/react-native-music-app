import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

type InputFieldProps = {
  label: any,
  icon: any,
  inputType?: any,
  keyboardType?: any,
  fieldButtonLabel?: any,
  fieldButtonFunction?: any,
  value: any,
  onChange: (text: string) => void,
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChange
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0, color: 'white'}}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0, color: 'white'}}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default InputField