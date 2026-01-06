"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-teal-500 text-white h-screen sticky top-0 flex flex-col items-center pt-14 overflow-visible">
      {/* 프로필 이미지 */}
      <div className="mb-6">
        <Image
          src="/profile.jpg"
          alt="profile"
          width={112}
          height={112}
          className="rounded-full"
          priority
        />
      </div>

      {/* 이름 */}
      <h2 className="text-2xl font-bold mb-6">ChoiMinSeo</h2>

      {/* 네비게이션 */}
      <nav className="w-full">
        <Link
          href="#introduction"
          className="block py-4 text-center hover:bg-teal-600 transition"
        >
          Introduction
        </Link>

        <Link
          href="#skillset"
          className="block py-4 text-center hover:bg-teal-600 transition"
        >
          SkillSet
        </Link>

        <Link
          href="#portfolio"
          className="block py-4 text-center hover:bg-teal-600 transition"
        >
          Portfolio
        </Link>

        <Link
          href="#contact"
          className="block py-4 text-center hover:bg-teal-600 transition"
        >
          Contact
        </Link>
      </nav>
    </aside>
  );
}
