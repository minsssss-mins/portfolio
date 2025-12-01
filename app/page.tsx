"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="p-10 space-y-40">

      {/* ===================== */}
      {/* Introduction SECTION */}
      {/* ===================== */}
      <motion.section
        id="introduction"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl font-bold text-teal-500 mb-12">Introduction</h1>

        <p className="text-3xl font-bold mb-4">안녕하세요.</p>
        <p className="text-3xl font-bold mb-10">
          저는 신입 백엔드 개발자 최민서입니다.
        </p>

        <blockquote className="italic text-gray-700 mb-6">
          "아는 것 만으로는 충분하지 않다. 적용할 줄 알아야 한다."
        </blockquote>

        <p className="text-lg leading-relaxed text-gray-700">
          공부한 내용을 실전 개발에 적용해보고 필요한 프로그램을 만드는 것을 좋아합니다.
          <br />
          현재는 백엔드 개발자로 취업을 준비 중입니다.
        </p>
      </motion.section>

      {/* ===================== */}
      {/* SkillSet SECTION */}
      {/* ===================== */}
      <motion.section
        id="skillset"
        className="min-h-screen py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-extrabold text-center mb-4 text-black tracking-wide">
          <span className="inline-block mb-2">🔗</span> SKILLS
        </h1>

        {/* 밑줄 */}
        <motion.div
          className="w-24 h-1 bg-black mx-auto mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        {/* 카드 박스 */}
        <motion.div
          className="max-w-6xl mx-auto bg-[#FBF4DB] rounded-3xl shadow-xl p-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SkillRow
            icon="💻"
            title="Language"
            skills={["TypeScript", "JavaScript", "Python", "Java", "Kotlin"]}
          />

          <SkillRow
            icon="🖥️"
            title="Frontend"
            skills={[
              "Next.js / React",
              "Zustand",
              "Recoil",
              "React-Query",
              "Apollo-Client",
              "React-Hook-Form",
              "Sass",
              "Tailwind CSS",
              "Emotion",
              "Vite",
            ]}
          />

          <SkillRow
            icon="🗄️"
            title="Backend"
            skills={["Django", "Spring (Boot)", "Gradle", "Firebase", "Supabase"]}
          />

          <SkillRow
            icon="⚙️"
            title="DevOps"
            skills={[
              "Docker",
              "AWS (ECS, EB)",
              "Kubernetes",
              "Redis",
              "Elastic Search",
              "Vercel",
            ]}
          />
        </motion.div>
      </motion.section>

      {/* ===================== */}
      {/* Portfolio SECTION */}
      {/* ===================== */}
      <motion.section
        id="portfolio"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold text-teal-500 mb-10">Portfolio</h1>
        <p className="text-gray-700">진행했던 프로젝트들을 정리합니다.</p>
      </motion.section>

      {/* ===================== */}
      {/* Contact SECTION */}
      {/* ===================== */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold text-teal-500 mb-10">Contact</h1>
        <p className="text-gray-700">연락 가능합니다.</p>
      </motion.section>
    </main>
  );
}

/* ===============================
   SkillRow 컴포넌트 (Hydration Error 제거)
================================ */
function SkillRow({
  icon,
  title,
  skills,
}: {
  icon: string;
  title: string;
  skills: string[];
}) {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(skills.map(() => getRandomColor()));
  }, [skills]);

  return (
    <motion.div
      className="flex items-start mb-10 gap-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center w-40 gap-3">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <motion.span
            key={skill}
            className="px-4 py-2 rounded-lg text-sm font-bold text-white shadow-md"
            style={{ backgroundColor: colors[idx] }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

/* ===============================
   태그 색상 랜덤 생성
================================ */
function getRandomColor() {
  const colors = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#6366F1",
    "#EC4899",
    "#22C55E",
    "#0EA5E9",
    "#8B5CF6",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
