"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-teal-500 text-white h-screen sticky top-0 flex flex-col items-center py-10">

      {/* 프로필 이미지 */}
      <Image
        src="/profile.jpg"
        alt="profile"
        width={112}   // w-28 = 112px
        height={112}
        className="w-28 h-28 rounded-full mb-6"
      />

      {/* 이름 */}
      <h2 className="text-2xl font-bold mb-6">ChoiMinSeo</h2>

      {/* 네비게이션 */}
      <nav className="w-full">
        <Link href="#introduction" className="block py-4 text-center hover:bg-teal-600">
          Introduction
        </Link>

        <Link href="#skillset" className="block py-4 text-center hover:bg-teal-600">
          SkillSet
        </Link>

        <Link href="#portfolio" className="block py-4 text-center hover:bg-teal-600">
          Portfolio
        </Link>

        <Link href="#contact" className="block py-4 text-center hover:bg-teal-600">
          Contact
        </Link>
      </nav>

    </aside>
  );
}
