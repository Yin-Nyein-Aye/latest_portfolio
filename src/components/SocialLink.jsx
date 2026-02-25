import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default function SocialLink() {
    return (
        <div>
            <p className="text-lg font-bold">Professional Links</p>
            <div className="flex justify-start gap-6 mt-2">
                <a
                    href="https://github.com/Yin-Nyein-Aye"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub
                        size={25}
                        className="text-olive-700 hover:text-olive-900 transition-colors duration-500"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/yinnyeinaye/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin
                        size={25}
                        className="text-blue-700 hover:text-blue-900 transition-colors duration-500"
                    />
                </a>
                <a
                    href="mailto:yinnyeinaye.yinnyein@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MdMarkEmailRead
                        size={25}
                        className="text-red-700 hover:text-red-900 transition-colors duration-500"
                    />
                </a>
            </div>
        </div>
    )
}
