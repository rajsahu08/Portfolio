import { Label } from "@/components/ui/label";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiBootstrap,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiNextdotjs,
    SiVercel,
    SiGit,
    SiGithub,
    SiEjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // ✅ use FontAwesome Java

import LogoLoop from "@/components/LogoLoop";

export default function Skills() {
    const techLogos = [
        { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
        { node: <SiEjs />, title: "EJS", href: "https://ejs.co" },
        { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
        { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTailwindcss />, title: "Shadcn/UI", href: "https://ui.shadcn.com" }, // placeholder
        { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
        { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
        { node: <FaJava />, title: "Java", href: "https://www.java.com" }, // ✅ fixed
        { node: <SiVercel />, title: "Render", href: "https://render.com" }, // placeholder
    ];


    return (
        <div className="w-full md:px-50 mt-10" id="skills">
            <Label className="relative text-2xl w-fit sm:text-4xl pointer-events-auto group cursor-pointer">
                Skills
                {/* <span className="rounded-lg absolute left-0 bottom-0 h-[3px] w-0 bg-emerald-200 transition-all duration-500 group-hover:w-full" /> */}
            </Label>

            <div style={{ height: "80px", position: "relative", overflow: "" }}>
                <LogoLoop
                    logos={techLogos}
                    speed={120}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut={false}
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                    className="pointer-events-auto mt-3"
                />
            </div>

        </div>
    );
}
