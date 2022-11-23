import { useTypedSelector } from './../hooks/useTypedSelector';
import { useActions } from './../hooks/useActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from './../constants/consants';
export const login = async (email: string, password: string) => {
  const responce = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({email, password})
  })
  const data = await responce.json();
  AsyncStorage.setItem('userToken', data.token)
  return data.token
}

export const registration = async (email: string, password: string) => {
  const token = await fetch(`${BASE_URL}/auth/registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({email, password})
  })
  return await token.json();
}

export const getUser = async () => {
  const token = await AsyncStorage.getItem('userToken')
  const user = await fetch(`${BASE_URL}/users/one`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  return await user.json();
}