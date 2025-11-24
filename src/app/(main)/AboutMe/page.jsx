"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedWords from "./../../Components/AnimatedParagraph";

export default function AboutMe() {
  const skillContainer = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.15 },
    },
  };

  const skillItem = {
    hidden: { opacity: 0, x: -15 },
    show: { opacity: 1, x: 0, transition: { duration: 0.45 } },
  };

  return (
<section className="relative py-28 px-6 bg-[url('/projectsbg.jpg')] bg-center bg-cover md:bg-fixed">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-5xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <Image
              src="/AboutPic.jpg"
              alt="Youssef Hashish"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg border-4 border-yellow-500 object-cover"
              priority
            />
          </motion.div>

          {/* Right Description */}
          <div className="md:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-yellow-500 mb-4"
            >
              About Me
            </motion.h2>

            <AnimatedWords>
              I’m <span className="font-semibold">Youssef Hashish</span>, a fresh
              Computer Engineering graduate from{" "}
              <span className="font-semibold text-yellow-400">Nile University</span>.
              I enjoy building innovative solutions that bridge technology and
              real-world needs, with hands-on experience in{" "}
              <span className="font-semibold">
                web development, embedded systems, IoT, and circuit design
              </span>.
              I’m a fast learner with strong problem-solving skills, teamwork
              spirit, and an eye for detail. Recently, I also completed a{" "}
              <span className="font-semibold text-yellow-400">
                Frontend Development Diploma at Route Academy
              </span>
              , where I gained practical skills in React.js, Next.js, and Tailwind CSS.
              I value{" "}
              <span className="font-semibold">
                time management, organization, and creativity
              </span>
              , and I’m always eager to explore new technologies and grow as an engineer.
            </AnimatedWords>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-500 mb-6"
          >
            Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Programming Skills */}
            <motion.div
              variants={skillContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                Programming & Development
              </h3>

              <ul className="list-disc list-inside space-y-1 text-white">
                {[
                  "Python, Java, JavaScript, TypeScript",
                  "React.js, Next.js, NextAuth, Tailwind CSS",
                  "React Native, Basics of Web Development & Tooling",
                ].map((skill, i) => (
                  <motion.li
                    key={i}
                    variants={skillItem}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Engineering Skills */}
            <motion.div
              variants={skillContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                Engineering & Technical Tools
              </h3>

              <ul className="list-disc list-inside space-y-1 text-white">
                {["Logic Design, Circuit Analysis", "MATLAB, Cadence", "Microsoft Project"].map(
                  (skill, i) => (
                    <motion.li
                      key={i}
                      variants={skillItem}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {skill}
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Other Skills */}
            <motion.div
              variants={skillContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Other Skills</h3>

              <ul className="list-disc list-inside space-y-1 text-white">
                {[
                  "Database Management",
                  "Creative Design",
                  "Team Collaboration & Multitasking",
                ].map((skill, i) => (
                  <motion.li
                    key={i}
                    variants={skillItem}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={skillContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                Certifications
              </h3>

              <ul className="list-disc list-inside space-y-1 text-white">
                <motion.li
                  variants={skillItem}
                  className="hover:text-yellow-400 transition-colors"
                >
                  <span className="font-semibold">
                    Frontend Development Diploma – Route Academy (2025)
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={skillContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Languages</h3>

              <ul className="list-disc list-inside space-y-1 text-white">
                {["English (C1 – Advanced)", "German (A2 – Beginner)"].map((skill, i) => (
                  <motion.li
                    key={i}
                    variants={skillItem}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
