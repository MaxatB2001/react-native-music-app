import { BASE_URL } from './../constants/consants';
export const getSongs = async () => {
  const responce = await fetch(`${BASE_URL}/track?count=100`);
  return await responce.json();
}