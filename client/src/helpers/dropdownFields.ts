

import Github from "../assets/icon-github.svg"
import Twitter from "../assets/icon-twitter.svg"
import Linkedin from "../assets/icon-linkedin.svg"
import Youtube from "../assets/icon-youtube.svg"
import { DropdownOption } from "../types/types";

const dropdownOptions: DropdownOption[] = [
    {image: Github , name: "Github", link: "https://github.com/"},
    {image: Twitter , name: "Twitter", link: "https://twitter.com/"},
    {image: Linkedin, name: "Linkedin", link: "https://www.linkedin.com/in/"},
    {image: Youtube, name: "Youtube", link: "https://www.youtube.com/"},
];

export default dropdownOptions;