import SectionSubTitle from "@/components/section_subtitle";
import SectionTitle from "@/components/section_title";

//Icons
import CIcon from "./skills_icon/languages/C.png"
import CppIcon from "./skills_icon/languages/Cpp.png"
import CSIcon from "./skills_icon/languages/CS.png"
import JavaIcon from "./skills_icon/languages/Java.png"
import PythonIcon from "./skills_icon/languages/Python.png"
import JsIcon from "./skills_icon/languages/Js.png"
import TsIcon from "./skills_icon/languages/Ts.png"
import htmlIcon from "./skills_icon/languages/html.png"
import cssIcon from "./skills_icon/languages/css.png"

import ExpressjsIcon from "./skills_icon/libraries/Expressjs.png"
import NextjsIcon from "./skills_icon/libraries/Nextjs.png"
import NetIcon from "./skills_icon/libraries/Net.png"
import SpringBootIcon from "./skills_icon/libraries/SpringBoot.png"
import ReactIcon from "./skills_icon/libraries/React.png"
import ReactNativeIcon from "./skills_icon/libraries/ReactNative.png"

import FigmaIcon from "./skills_icon/other/Figma.png"
import GitIcon from "./skills_icon/other/Git.png"
import GithubIcon from "./skills_icon/other/Github.png"
import GodotIcon from "./skills_icon/other/Godot.png"
import MySqlIcon from "./skills_icon/other/MySql.png"
import PostgreSqlIcon from "./skills_icon/other/PostgreSql.png"
import UnityIcon from "./skills_icon/other/Unity.png"

import SkillEntry from "./skill-entry";

const languageList = [
    { name:"C", src:"/skills_icon/languages/C.png" },
    { name:"C++", src:"/skills_icon/languages/Cpp.png" },
    { name:"C#", src:"/skills_icon/languages/CS.png" },
    { name:"Java", src:"/skills_icon/languages/Java.png" },
    { name:"Python", src:"/skills_icon/languages/Python.png" },
    { name:"Java Script", src:"/skills_icon/languages/Js.png" },
    { name:"Type Script", src:"/skills_icon/languages/Ts.png" },
    { name:"HTML", src:"/skills_icon/languages/html.png" },
    { name:"CSS", src:"/skills_icon/languages/css.png" }
];

const libraryList = [
    { name:"Express.js", src:"/skills_icon/libraries/Expressjs.png" },
    { name:"Next.js", src:"/skills_icon/libraries/Nextjs.png" },
    { name:".Net", src:"/skills_icon/libraries/Net.png" },
    { name:"Spring Boot", src:"/skills_icon/libraries/SpringBoot.png" },
    { name:"React", src:"/skills_icon/libraries/React.png" },
    { name:"React Native", src:"/skills_icon/libraries/ReactNative.png" },
];

const otherList = [
    { name:"Figma", src:"/skills_icon/other/Figma.png" },
    { name:"Git", src:"/skills_icon/other/Git.png" },
    { name:"Github", src:"/skills_icon/other/Github.png" },
    { name:"MySql", src:"/skills_icon/other/MySql.png" },
    { name:"PostgreSQL", src:"/skills_icon/other/PostgreSql.png" },
    { name:"Godot", src:"/skills_icon/other/Godot.png" },
    { name:"Unity", src:"/skills_icon/other/Unity.png" },
];

export default function Skills(){
    return <section id="skills" className="flex flex-col gap-8 pt-40 lg:pt-32">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-col gap-16">
            <SkillSection 
                title="Programming Languages / Other Languages"
                skillData={languageList}
            />
            <SkillSection 
                title="Frameworks / Libraries"
                skillData={libraryList}
            />
            <SkillSection 
                title="Other Tools"
                skillData={otherList}
            />
        </div>
    </section>
}

type SkillData = {
    name:string,
    src:string
}

interface SkillSectionProps{
    title:string,
    skillData:SkillData[]
}

function SkillSection({
    title,
    skillData
}:SkillSectionProps){
    function renderSkillEntries(){
        return skillData.map(v=>{
            return <SkillEntry key={v.name} name={v.name} src={v.src} />
        })
    }

    return <div className="flex flex-col gap-4">
        <SectionSubTitle>{title}</SectionSubTitle>
        <div className="flex flex-row flex-wrap gap-4">
            {renderSkillEntries()}
        </div>
    </div>
}