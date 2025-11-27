export default function SkillSetPage() {
  return (
    <section className="bg-yellow-400 min-h-screen py-20">
      {/* 제목 */}
    <h1 className="text-5xl font-extrabold text-center mb-4 text-black tracking-wide">
    <span className="inline-block mb-2">🔗</span> SKILLS
    </h1>

    {/* 밑줄 */}
    <div className="w-24 h-1 bg-black mx-auto mb-16"></div>


      {/* 카드 박스 */}
      <div className="max-w-6xl mx-auto bg-[#FBF4DB] rounded-3xl shadow-xl p-14">
        {/* Language */}
        <SkillRow
          icon="💻"
          title="Language"
          skills={[
            "TypeScript",
            "JavaScript",
            "Python",
            "Java",
            "Kotlin",
          ]}
        />

        {/* Frontend */}
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

        {/* Backend */}
        <SkillRow
          icon="🗄️"
          title="Backend"
          skills={[
            "Django",
            "Spring (Boot)",
            "Gradle",
            "Firebase",
            "Supabase",
          ]}
        />

        {/* DevOps */}
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
      </div>
    </section>
  );
}

/* -----------------------------
   SkillRow 컴포넌트
-------------------------------- */
function SkillRow({
  icon,
  title,
  skills,
}: {
  icon: string;
  title: string;
  skills: string[];
}) {
  return (
    <div className="flex items-start mb-10 gap-10">
      {/* 아이콘 + 제목 */}
      <div className="flex items-center w-40 gap-3">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>

      {/* 스킬 태그 */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-lg text-sm font-bold text-white shadow-md"
            style={{ backgroundColor: getRandomColor() }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -----------------------------
   태그 색상 랜덤 생성
-------------------------------- */
function getRandomColor() {
  const colors = [
    "#3B82F6", // blue
    "#10B981", // green
    "#F59E0B", // yellow
    "#EF4444", // red
    "#6366F1", // indigo
    "#EC4899", // pink
    "#22C55E", // lime
    "#0EA5E9", // sky
    "#8B5CF6", // violet
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
