import { CustomLink } from "../types/types";
import backend from "./backend";

const createLink = (link: CustomLink) => backend.post("/links", {link} );
const getLink = () => backend.get("/links" );
const register = (email: string, password: string) => backend.post("/auth/register", { email, password });

const linkservice = {
    createLink,
    getLink,
    register
}

export default linkservice;
