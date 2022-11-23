import { searchFilters } from "./../screens/TabTwoScreen";
import { BASE_URL } from "./../constants/consants";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const getSongs = async () => {
  try {
    const responce = await fetch(`${BASE_URL}/track?count=100`);
    return await responce.json();
  } catch (e) {
    throw e;
  }
};

export const search = async (query: string, filter: searchFilters) => {
  try {
    const responce = await fetch(`${BASE_URL}/${filter}/search?query=${query}`);
    return await responce.json();
  } catch (e) {
    throw e;
  }
};

export const getAlbum = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/album/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getArtist = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/artist/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getLikedSongs = async () => {
  const token = await AsyncStorage.getItem("userToken");
  const responce = await fetch(`${BASE_URL}/users/likedSongs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await responce.json();
  return data.likedTracks;
};

export const getLikedAlbums = async () => {
  const token = await AsyncStorage.getItem("userToken");
  const responce = await fetch(`${BASE_URL}/users/likedAlbums`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await responce.json();
  return data.likedAlbums;
};

export const getLikedArtists = async () => {
  const token = await AsyncStorage.getItem("userToken");
  const responce = await fetch(`${BASE_URL}/users/likedArtist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await responce.json();
  console.log(data);
  
  return data.likedArtists;
};

export const likeSong = async (id: string) => {
  const token = await AsyncStorage.getItem("userToken");
  fetch(`${BASE_URL}/users/addLikedSong`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ songId: id }),
  });
};

export const dislikeSong = async (id: string) => {
  const token = await AsyncStorage.getItem("userToken");
  fetch(`${BASE_URL}/users/removeLikedSong`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ songId: id }),
  });
};


export const likeAlbum = async (id: string) => {
  const token = await AsyncStorage.getItem("userToken");
  fetch(`${BASE_URL}/users/addLikedAlbum`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ albumId: id }),
  });
};

export const dislikeAlbum = async (id: string) => {
  const token = await AsyncStorage.getItem("userToken");
  fetch(`${BASE_URL}/users/removeLikedAlbum`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ albumId: id }),
  });
};

export const getSelections = async () => {
  const selections = await fetch(`${BASE_URL}/selections`)
  return await selections.json();
}

export const getLatestReleases = async () => {
  const albums = await fetch(`${BASE_URL}/album/latest`)
  return await albums.json();
}

export const getChart = async () => {
  const chart = await fetch(`${BASE_URL}/track/chart`)
  return await chart.json();
}