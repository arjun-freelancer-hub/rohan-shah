import Image from "next/image";

export default function BehindThePassion() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 md:px-0 w-full">
      <div className="bg-[#2E7D32] rounded-[32px] px-8 py-4 mb-[-40px] z-10 relative w-full max-w-3xl flex items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          The Person Behind the Passion
        </h2>
      </div>
      <div className="bg-[#4186C6] rounded-3xl shadow-lg p-8 pt-16 flex flex-col md:flex-row items-center w-full relative">
        <div className="flex-1 text-white text-base md:text-lg space-y-2">
          <p>Today we have a International Player who has represented India in various International Games worldwide and he is from Bilaspur.</p>
          <p>He is a Businessmen along with Active sports player.</p>
          <p>He runs 7 businesses in Bilaspur currently and also a Launch Director Consultant of BNI Bilaspur south.</p>
          <p>He has represented India,</p>
          <p>In 2019, He has won 2 silver medals in 8th world strength lifting championship held in Thailand.</p>
          <p>In 2020, he has won 2 Gold medals in World cup Powerlifting championship held in Ukraine for India.</p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
          <Image
            src="/rohan2.png"
            alt="Rohan Shah"
            width={400}
            height={600}
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
} 