import api from "./api";

export const signup = async (userData) => {
    return api.post("/seller/auth/signup", userData);
};

export const login = async (credentials) => {
    return api.post("/seller/auth/login", credentials);
};

export const logout = async () => {
    return api.post("/seller/auth/logout");
};
