// import AsyncStorage from "@react-native-async-storage/async-storage";

// const baseURL = "http://192.168.1.4:4000/api/v1";

// const api = {
//   request: async (method, endpoint, data = null) => {
//     try {
//       const token = await AsyncStorage.getItem("token");

//       const headers = {
//         "Content-Type": "application/json",
//       };

//       if (token) {
//         headers["Authorization"] = `Bearer ${token}`;
//       }

//       const options = {
//         method,
//         headers,
//         body: data ? JSON.stringify(data) : null,
//       };
//       console.log("options", options);
//       const response = await fetch(`${baseURL}${endpoint}`, options);
// console.log("response", response);
//       if (response.status === 401) {
//         await AsyncStorage.removeItem("token"); // Handle expired token
//       }

//       if (!response.ok) {
//         throw new Error(`HTTP Error: ${response.status}`);
//       }

//       return await response.json();
//     } catch (error) {
//       console.error("❌ Fetch API Error:", error.message);
//       throw error;
//     }
//   },

//   get: (endpoint) => api.request("GET", endpoint),
//   post: (endpoint, data) => api.request("POST", endpoint, data),
//   put: (endpoint, data) => api.request("PUT", endpoint, data),
//   delete: (endpoint) => api.request("DELETE", endpoint),
// };

// export default api;
// /