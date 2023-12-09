import backend from "./backend";

const login = (email: string, password: string) => backend.post("/auth/login", { email, password });

const register = (email: string, password: string) => backend.post("/auth/register", { email, password });

const authservice = {
    login,
    register
}

export default authservice;
