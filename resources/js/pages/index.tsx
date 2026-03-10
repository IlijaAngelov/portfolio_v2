import { Head, usePage } from '@inertiajs/react';
import { IoMdArrowDropright } from "react-icons/io";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from 'react';

type Personal = {
    name?: string;
    title?: string;
    tagline?: string;
    bio?: string;
    email?: string;
    github?: string;
    portfolio?: string;
    phone?: string;
};

type Education = {
    degree?: string;
    institution?: string;
};

type Skills = {
    backend: string[];
    frontend: string[];
    tools: string[];
};

export default function Welcome() {
    const [isEmailCopied, setIsEmailCopied] = useState(false);
    const { resumeData } = usePage().props as { resumeData: any };
    const {
        personal = {} as Personal,
        skills = { backend: [], frontend: [], tools: [] } as Skills,
        expertise = [],
        experience = [],
        education = {} as Education,
    } = (resumeData as any) || {};

    async function copyFunction(): Promise<void> {
        if (!personal.email) {
            return;
        }

        try {
            await navigator.clipboard.writeText(personal.email);
            setIsEmailCopied(true);
            setTimeout(() => {
                setIsEmailCopied(false);
            }, 2000);
        } catch {
            setIsEmailCopied(false);
        }
    }

    return (
        <>
            <Head title={personal.name || 'Portfolio'}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-[#0a0e27] text-gray-300">
                {/* Header */}
                <header className="border-b border-gray-800">
                    <div className="max-w-6xl mx-auto px-6 py-8">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-1">{personal.name}</h1>
                                <p className="text-[#61AFEF] text-lg">{personal.title}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 max-w-md justify-end">
                                {skills.backend.slice(0, 5).map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-[#1e2139] text-[#61AFEF] text-sm border border-[#2d3250] rounded hover:border-[#61AFEF] transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="flex items-center gap-6 text-sm">
                            <span className="text-[#61AFEF] font-mono">~/portfolio$</span>
                            <a href="#home" className="text-[#61AFEF] hover:text-white transition-colors">home</a>
                            <a href="#about" className="hover:text-white transition-colors">about</a>
                            <a href="#expertise" className="hover:text-white transition-colors">expertise</a>
                            <a href="#experience" className="hover:text-white transition-colors">experience</a>
                            <a href="#contact" className="hover:text-white transition-colors">contact</a>
                        </nav>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-6xl mx-auto px-6 py-16">

                    {/* Hero Section */}
                    <section id="home" className="mb-24">
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold text-white mb-4">Welcome</h2>
                            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                                {personal.tagline}
                            </p>
                        </div>

                        <div className="bg-[#1e2139] border-l-4 border-[#61AFEF] p-6 rounded-lg">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-300">
                                    <IoMdArrowDropright className="text-[#61AFEF] mt-1 flex-shrink-0" />
                                    <span>5+ years of experience in web development, specializing in PHP frameworks</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-300">
                                    <IoMdArrowDropright className="text-[#61AFEF] mt-1 flex-shrink-0" />
                                    <span>Expert in Laravel, Symfony, React, Magento2, and building scalable REST APIs</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-300">
                                    <IoMdArrowDropright className="text-[#61AFEF] mt-1 flex-shrink-0" />
                                    <span>{education.degree} - {education.institution}</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-300">
                                    <IoMdArrowDropright className="text-[#61AFEF] mt-1 flex-shrink-0" />
                                    <span>Currently contributing to open-source and non-profit projects</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="mb-24">
                        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                        <div className="bg-[#1e2139] p-8 rounded-lg border border-gray-800">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {personal.bio}
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 text-sm">
                                <div>
                                    <span className="text-gray-500 block mb-2">Backend:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.backend.map((skill, idx) => (
                                            <span key={idx} className="text-[#61AFEF] bg-[#0a0e27] px-2 py-1 rounded text-xs border border-[#2d3250]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="text-gray-500 block mb-2">Frontend:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.frontend.map((skill, idx) => (
                                            <span key={idx} className="text-[#61AFEF] bg-[#0a0e27] px-2 py-1 rounded text-xs border border-[#2d3250]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="text-gray-500 block mb-2">Tools & Infrastructure:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.tools.map((skill, idx) => (
                                            <span key={idx} className="text-[#61AFEF] bg-[#0a0e27] px-2 py-1 rounded text-xs border border-[#2d3250]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Expertise Section */}
                    <section id="expertise" className="mb-24">
                        <h2 className="text-3xl font-bold text-white mb-6">Expertise</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {expertise.map((area, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1e2139] p-6 rounded-lg border border-gray-800 hover:border-[#61AFEF] transition-colors"
                                >
                                    <h3 className="text-xl font-semibold text-[#61AFEF] mb-3">
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {area.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {area.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <IoMdArrowDropright className="text-[#61AFEF] mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-300">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section id="experience" className="mb-24">
                        <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
                        <div className="space-y-6">
                            {experience.map((job, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1e2139] p-6 rounded-lg border border-gray-800 hover:border-[#61AFEF] transition-all"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">
                                                {job.title}
                                            </h3>
                                            <p className="text-[#61AFEF] text-sm mt-1">{job.company}</p>
                                        </div>
                                        <span className="text-gray-500 text-sm whitespace-nowrap ml-4">
                                            {job.period}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 mb-4 text-sm">
                                        {job.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {job.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <IoMdArrowDropright className="text-[#61AFEF] mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-300">{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="mb-24">
                        <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                        <div className="bg-[#1e2139] p-8 rounded-lg border border-gray-800">
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I'm always interested in hearing about new projects and opportunities.
                                Feel free to reach out if you'd like to work together!
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={`mailto:${personal.email}`}
                                    className="flex items-center gap-2 px-6 py-3 bg-[#61AFEF] text-white rounded hover:bg-[#528bcc] transition-colors"
                                >
                                    <FaEnvelope />
                                    <span>Email Me</span>
                                </a>
                                <a
                                    href={personal.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded hover:border-[#61AFEF] hover:text-[#61AFEF] transition-colors"
                                >
                                    <FaGithub />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={personal.portfolio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded hover:border-[#61AFEF] hover:text-[#61AFEF] transition-colors"
                                >
                                    <FaLinkedin />
                                    <span>LinkedIn</span>
                                </a>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-800">
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-gray-500">Email:</span>
                                        <div className="flex flex-row items-center gap-2">
                                            <p id="emailCopy" className="hover:text-[#FFE629]">{personal.email}</p>
                                            <button
                                                type="button"
                                                onClick={copyFunction}
                                                aria-label="Copy email"
                                                className="text-[#FFE629] transition-opacity hover:opacity-80"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"/>
                                                </svg>
                                            </button>
                                            <div className={`text-xs text-[#FFE629] transition-opacity ${isEmailCopied ? 'opacity-100' : 'opacity-0'}`}>
                                                Copied!
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Phone:</span>
                                        <p className="text-gray-300 mt-1">{personal.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-t border-gray-800 py-8">
                    <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
                        <p>© {new Date().getFullYear()} {personal.name}. Built with React & Laravel.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
