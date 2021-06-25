
import { runInAction, makeAutoObservable } from "mobx";
import instance from "./instance";

import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";


class AuthStore {
  user = null;
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }


  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("myToken");
      if (jsonValue) {
        runInAction(() => {
          this.user = decode(jsonValue);
          this.isLoading = false;
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  signout = () => {
    AsyncStorage.removeItem("myToken");
    runInAction(() => (this.user = null));
  };

 
  signIn = async (userData) => {
    try {
      const res = await instance.post("/login", userData);
      runInAction(() => (this.user = res.data.data))
    } catch (error) {
      console.log("AuthStore -> signIn -> error", error);
    }
  };
}

const authStore = new AuthStore();
authStore.getData();

export default authStore;
