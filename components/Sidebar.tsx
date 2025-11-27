"use client";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-teal-500 text-white h-screen sticky top-0 flex flex-col items-center py-10">
      {/* 프로필 이미지 */}
      <img
        src="/profile.jpg"
        alt="profile"
        className="w-28 h-28 rounded-full mb-6"
      />

      {/* 이름 */}
      <h2 className="text-2xl font-bold mb-6">ParkHeonJin</h2>

      {/* 네비게이션 */}
      <nav className="w-full">
        <a href="/" className="block py-4 text-center hover:bg-teal-600">
          Introduction
        </a>
        <a href="/skillset" className="block py-4 text-center hover:bg-teal-600">
          SkillSet
        </a>
        <a href="/portfolio" className="block py-4 text-center hover:bg-teal-600">
          Portfolio
        </a>
        <a href="/contact" className="block py-4 text-center hover:bg-teal-600">
          Contact
        </a>
      </nav>
    </aside>
  );
}
