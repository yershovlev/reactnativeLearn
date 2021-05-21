import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const result = await AsyncStorage.getItem(key);
    const item = JSON.parse(result);

    if (!item) {
      return null;
    } else {
      const now = moment(Date.now());
      const storedTime = moment(item.timestamp);
      if (now.diff(storedTime, "milliseconds") > 100) {
        await AsyncStorage.removeItem(key);
        return null;
      }

      return item.value;
    }
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
