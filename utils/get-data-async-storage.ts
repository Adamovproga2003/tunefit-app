import AsyncStorage from '@react-native-async-storage/async-storage'

export const getDataFromStorage = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key)
		if (value !== null) {
			return value
		}
	} catch (e) {
		console.error(e)
		// error reading value
	}
}
