import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-yellow-500/20 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
  <Image
    src="/images/logo.png"
    alt="Snack Kiki"
    width={50}
    height={50}
    className="rounded-full"
  />
  <h1 className="text-2xl font-bold text-yellow-400">سناك كيكي</h1>
</div>
        <a
          href="#menu"
          className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-300 transition"
        >
          المنيو
        </a>
      </header>

      {/* Hero */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
         ! طعم لا يُقاوم
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          ساندويشات، متبلات، مناقيش، صاج، ووجبات. توصيل لكل عين بعال والجوار.
        </p>
        <div className="relative w-full max-w-md mx-auto h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src="/images/burger.jpg"
            alt="Burger"
            fill
            className="object-cover"
            priority
          />
        </div>
        <a
          href="#contact"
          className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition inline-block"
        >
          اطلب الآن
        </a>
      </section>

      {/* Menu */}
      <section id="menu" className="px-6 py-20 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          المنيو
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sandwiches */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-yellow-500/20 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/shawarma.jpg"
                alt="Shawarma"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">🥙 ساندويشات</h4>
              <ul className="space-y-2 text-gray-200">
                <li>برغر</li>
                <li>شاورما</li>
                <li>فلافل</li>
                <li>صاج</li>
                <li>شاورما دجاج</li>
              </ul>
            </div>
          </div>

          {/* Mezze */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-yellow-500/20 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/hummus.jpg"
                alt="Hummus"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">🥣 متبلات</h4>
              <ul className="space-y-2 text-gray-200">
                <li>حمص</li>
                <li>متبل</li>
                <li>تبولة</li>
                <li>فتوش</li>
                <li>كبة</li>
              </ul>
            </div>
          </div>

          {/* Manakish */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-yellow-500/20 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/manakish.jpg"
                alt="Manakish"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">🫓 مناقيش</h4>
              <ul className="space-y-2 text-gray-200">
                <li>زعتر</li>
                <li>جبنة</li>
                <li>بيتزا</li>
                <li>لحم بعجين</li>
                <li>سبانخ</li>
              </ul>
            </div>
          </div>

          {/* Saj */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-yellow-500/20 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/falafel.jpg"
                alt="Falafel"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">🥙 صاج</h4>
              <ul className="space-y-2 text-gray-200">
                <li>صاج دجاج</li>
                <li>صاج لحمة</li>
                <li>صاج مشكل</li>
              </ul>
            </div>
          </div>

          {/* Meals - NEW */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-yellow-500/20 overflow-hidden md:col-span-2">
            <div className="relative h-48">
              <Image
                src="/images/burger.jpg"
                alt="Meals"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">🍔 وجبات</h4>
              <ul className="space-y-2 text-gray-200 grid grid-cols-2 md:grid-cols-3 gap-2">
                <li>وجبة برغر</li>
                <li>وجبة شاورما</li>
                <li>وجبة فلافل</li>
                <li>وجبة صاج</li>
                <li>وجبة مشكل</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          🛵 مناطق التوصيل
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-yellow-500/20 text-center">
            <h4 className="text-2xl font-bold text-yellow-400 mb-2">الحوش</h4>
            <p className="text-gray-300">300,000 ل.ل</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-yellow-500/20 text-center">
            <h4 className="text-2xl font-bold text-yellow-400 mb-2">بتولاي</h4>
            <p className="text-gray-300">200,000 ل.ل</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-yellow-500/20 text-center">
            <h4 className="text-2xl font-bold text-yellow-400 mb-2">عين بعال</h4>
            <p className="text-gray-300">100,000 ل.ل</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-yellow-500/20 text-center">
            <h4 className="text-2xl font-bold text-yellow-400 mb-2">بصور</h4>
            <p className="text-gray-300">500,000 ل.ل</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h3 className="text-4xl font-bold mb-6 text-yellow-400">اطلب الآن</h3>
        <p className="text-gray-300 mb-8">
          توصيل لكل عين بعال والجوار
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <a
  href="https://wa.me/96178956804?text=مرحبا، بدي أطلب من Snack Kiki 🍔"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition"
>
  💬 اطلب على واتساب
</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm border-t border-yellow-500/20">
        © {new Date().getFullYear()} Snack Kiki. All rights reserved.
      </footer>
    </main>
  );
}