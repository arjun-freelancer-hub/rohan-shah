import Image from "next/image";

export default function BehindThePassion() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 md:px-0 w-full">
      <div className="bg-green-700 rounded-[32px] px-10 py-5 mb-[-40px] z-10 relative w-full max-w-3xl flex items-center justify-center shadow-lg">
        <h2 className="text-3xlxl md:text-4xl font-extrabold text-white text-center" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1px' }}>
          The Person Behind the Passion
        </h2>
      </div>
      <div className="bg-blue-600 rounded-3xl shadow-2xl p-10 pt-20 flex flex-col md:flex-row items-center w-full max-w-5xl relative mt-2">
        <div className="flex-1 text-white text-lg md:text-xl space-y-2 text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p>Today we have a International Player who has represented India in various International Games worldwide and he is from Bilaspur.</p>
          <p>He is a Businessmen along with Active sports player.</p>
          <p>He runs 7 businesses in Bilaspur currently and also a Launch Director Consultant of BNI Bilaspur south.</p>
          <p>He has represented India,</p>
          <p>In 2019, He has won 2 silver medals in 8th world strength lifting championship held in Thailand.</p>
          <p>In 2020, he has won 2 Gold medals in World cup Powerlifting championship held in Ukraine for India.</p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12 flex-shrink-0">
          <Image
            src="/rohan2.png"
            alt="Rohan Shah"
            width={300}
            height={400}
            className="rounded-2xl object-cover shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
} 