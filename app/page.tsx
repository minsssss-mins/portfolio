export default function Home() {
  return (
    <section>
      <h1 className="text-6xl font-bold text-teal-500 mb-12">Introduction</h1>

      <p className="text-3xl font-bold mb-4">안녕하세요.</p>
      <p className="text-3xl font-bold mb-10">
        저는 신입 백엔드 개발자 최민서입니다.
      </p>

      <blockquote className="italic text-gray-700 mb-6">
        "아는 것 만으로는 충분하지 않다. 적용할 줄 알아야 한다."
      </blockquote>

      <p className="text-lg leading-relaxed text-gray-700">
        공부한 내용을 실전 개발에 적용해보고 필요한 프로그램을 만드는 것을
        좋아합니다. <br />
        현재는 백엔드 개발자로 취업을 준비 중입니다.
      </p>
    </section>
  );
}