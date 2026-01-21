import twitterIcon from '../assets/twitter-icon.png'
import facebookIcon from '../assets/facebook-icon.png'
import instagramIcon from '../assets/instagram-icon.png'
import githubIcon from '../assets/github-icon.png'

const links = [
    {source: twitterIcon, alt: "Twitter Icon", link: "https://www.x.com/@jivnplatss"},
    {source: facebookIcon, alt: "Facebook Icon", link: "https://www.facebook.com/jivan.plata"},
    {source: instagramIcon, alt: "Instagram Icon", link: "https://www.instagram.com/ji.vannn"},
    {source: githubIcon, alt: "Github Icon", link: "https://www.github.com/Jivan-Plata"}
]

const allIcons = links.map (current => (
    <a href = {current.link}> <img src = {current.source} alt = {current.alt}/> </a>
))

function Footer() {
    return(
        <footer className="bg-[#161619] w-full flex flex-row justify-evenly items-center py-4">

            {allIcons}

        </footer>
    )
}

export default Footer;