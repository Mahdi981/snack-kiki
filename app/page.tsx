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
      <section className="relative text-center px-6 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/burger.jpg"
            alt="Burger"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            طعم لا يُقاوم!
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow">
            ساندويشات، متبلات، مناقيش، ووجبات. توصيل لكل عين بعال والجوار.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-yellow-300 transition inline-block shadow-lg"
          >
            اطلب الآن
          </a>
        </div>
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
                src="/images/snack2.jpg"
                alt="Sandwiches"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">🥙 ساندويشات</h4>
              <ul className="space-y-2 text-gray-200 text-sm">
                {[
                  ["زينغر", "350,000"],
                  ["توستر", "350,000"],
                  ["كرسيبي", "350,000"],
                  ["تشكن ساب", "350,000"],
                  ["تشكن برست حر", "350,000"],
                  ["تشكن برست بلا حر", "350,000"],
                  ["فرانسيسكو", "350,000"],
                  ["فاهيتا", "350,000"],
                  ["تشكن امريكانا", "350,000"],
                  ["كاجن حر", "350,000"],
                  ["كسديا", "600,000"],
                  ["تشكن برغر", "350,000"],
                  ["Lebanese برغر", "350,000"],
                  ["امريكانا برغر", "350,000"],
                  ["طاووق", "350,000"],
                  ["اسكلوب", "350,000"],
                ].map(([name, price]) => (
                  <li key={name} className="flex justify-between">
                    <span>{name}</span>
                    <span className="text-yellow-400">{price} ل.ل</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mezze */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-yellow-500/20 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/mezze.jpg"
                alt="Mezze"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">🥣 متبلات</h4>
              <ul className="space-y-2 text-gray-200 text-sm">
                {[
                  ["فاهيتا", "900,000"],
                  ["أسكلوب", "900,000"],
                  ["طاووق", "900,000"],
                  ["كاجن حر", "900,000"],
                  ["كاجن بلا حر", "900,000"],
                  ["فرانسيسكو", "900,000"],
                  ["ناغتس", "800,000"],
                  ["كرسيبي", "1,200,000"],
                  ["تشكن ساب", "900,000"],
                ].map(([name, price]) => (
                  <li key={name} className="flex justify-between">
                    <span>{name}</span>
                    <span className="text-yellow-400">{price} ل.ل</span>
                  </li>
                ))}
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

          {/* Meals */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-yellow-500/20 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/meal.jpg"
                alt="Meals"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">🍔 وجبات</h4>
              <ul className="space-y-2 text-gray-200 text-sm">
                {[
                  ["وجبة سندوش", "500,000"],
                  ["وجبة كرسيبي 3 قطع", "600,000"],
                  ["وجبة كرسيبي 5 قطع", "900,000"],
                ].map(([name, price]) => (
                  <li key={name} className="flex justify-between">
                    <span>{name}</span>
                    <span className="text-yellow-400">{price} ل.ل</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fries */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-yellow-500/20 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/fries.jpg"
                alt="Fries"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">🍟 بطاط</h4>
              <ul className="space-y-2 text-gray-200 text-sm">
                {[
                  ["بوكس بطاط صغير", "300,000"],
                  ["بوكس بطاط كبير", "600,000"],
                  ["بوكس سعادة صغير", "600,000"],
                  ["بوكس سعادة كبير", "900,000"],
                  ["سندوش بطاط فرنجي", "200,000"],
                  ["سندوش بطاط خبز عربي كبير", "250,000"],
                ].map(([name, price]) => (
                  <li key={name} className="flex justify-between">
                    <span>{name}</span>
                    <span className="text-yellow-400">{price} ل.ل</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Appetizers & Meals - NEW SECTION */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-yellow-500/20 overflow-hidden md:col-span-2">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-6 text-yellow-400 text-center">🍽️ مقبلات ومأكولات</h4>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* فتوش */}
                <div className="text-center">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3">
                    <Image
                      src="/images/fatoush1.jpg"
                      alt="فتوش"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-200 font-semibold">فتوش</p>
                </div>

                {/* تبولة */}
                <div className="text-center">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3">
                    <Image
                      src="/images/tabbouleh.jpg"
                      alt="تبولة"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-200 font-semibold">تبولة</p>
                </div>

                {/* كباب */}
                <div className="text-center">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3">
                    <Image
                      src="/images/kebab.jpg"
                      alt="كباب"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-200 font-semibold">كباب</p>
                </div>

                {/* سمبوسك */}
                <div className="text-center">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3">
                    <Image
                      src="/images/sambousek.jpg"
                      alt="سمبوسك"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-200 font-semibold">سمبوسك</p>
                </div>

                {/* رقائق */}
                <div className="text-center">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3">
                    <Image
                      src="/images/raqeeq1.jpg"
                      alt="رقائق"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-200 font-semibold">رقائق</p>
                </div>
              </div>
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
            className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition inline-flex items-center justify-center gap-2"
          >
            💬 اطلب على واتساب
          </a>
          <a
            href="tel:78956804"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition inline-flex items-center justify-center gap-2"
          >
            📞 78956804
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