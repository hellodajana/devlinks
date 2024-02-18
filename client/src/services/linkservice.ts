import { CustomLink } from "../types/types";
import backend from "./backend";

const createLink = (link: CustomLink) => backend.post("/links", {link} );
const register = (email: string, password: string) => backend.post("/auth/register", { email, password });

const linkservice = {
    createLink,
    register
}

export default linkservice;
