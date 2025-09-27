import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="relative py-28 px-6 bg-[url('/projectsbg.jpg')] bg-center bg-cover bg-fixed">

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-5xl mx-auto space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          <div className="flex justify-center md:justify-start">
            <Image
              src="/AboutPic.jpg" 
              alt="Youssef Hashish"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg border-4 border-yellow-500 object-cover"
              priority
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">About Me</h2>
            <p className="text-lg leading-relaxed text-white">
              I’m <span className="font-semibold">Youssef Hashish</span>, a fresh
              Computer Engineering graduate from Nile University. I enjoy building
              innovative solutions that bridge technology and real-world needs,
              with hands-on experience in{" "}
              <span className="font-semibold">
                web development, embedded systems, IoT, and circuit design
              </span>
              . I’m a fast learner with strong problem-solving skills, teamwork
              spirit, and an eye for detail. I value{" "}
              <span className="font-semibold">
                time management, organization, and creativity
              </span>
              , and I’m always eager to explore new technologies and grow as an
              engineer.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Programming & Development
              </h3>
              <ul className="list-disc list-inside space-y-1 text-white hover:[&>li]:text-yellow-400 transition-all">
                <li>Python, Java, JavaScript, TypeScript</li>
                <li>React.js, Next.js, NextAuth, Tailwind CSS</li>
                <li>React Native, Basics of Web Development & Tooling</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Engineering & Technical Tools
              </h3>
              <ul className="list-disc list-inside space-y-1 text-white hover:[&>li]:text-yellow-400 transition-all">
                <li>Logic Design, Circuit Analysis</li>
                <li>MATLAB, Cadence</li>
                <li>Microsoft Project</li>
              </ul>
            </div>


            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Other Skills
              </h3>
              <ul className="list-disc list-inside space-y-1 text-white hover:[&>li]:text-yellow-400 transition-all">
                <li>Database Management</li>
                <li>Creative Design</li>
                <li>Team Collaboration & Multitasking</li>
              </ul>
            </div>


            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Languages
              </h3>
              <ul className="list-disc list-inside space-y-1 text-white hover:[&>li]:text-yellow-400 transition-all">
                <li>English (C1 – Advanced)</li>
                <li>German (A2 – Beginner)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
