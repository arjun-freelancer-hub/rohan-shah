import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Biography from '../components/about/Biography';
import Achievements from '../components/about/Achievements';

const AboutPage = () => {
  const achievements = [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Rohan Shah</h1>

        <AboutHero
          image="/images/about-hero.jpg"
          title="Rohan Shah"
          description={`Today we have a International Player who has represented India in various International Games worldwide and he is from Bilaspur.\n\nHe is a Businessmen along with Active sports player.\n\nHe runs 7 businesses in Bilaspur currently and also a Launch Director Consultant of BNI Bilaspur south.\n\nHe has represented India,\n\nIn 2019, He has won 2 silver medals in 8th world strength lifting championship held in Thailand.\n\nIn 2020, he has won 2 Gold medals in World cup Powerlifting championship held in Ukraine for India.\n\nIn 2021, has won Bronze Medal in Shot-Put in 3rd National Master Athletics Championship held in Varanasi, where he has been qualified for Australia world Master Athletics Championship.\n\nIn 2022, has won 2 bronze medals in 9th world Strength lifting championship 2022 held in Kyrgyzstan again for India.\n\nRecently, he has won 1 Gold Medal in International Strength Lifting & Incline Bench press Championship 2023, Held in Nepal, Kathmandu.\n\nApart from Iron games, He has achieved many medals in various games like:\n\n- Swimming, played state level championship.\n- Water polo, state level championship.\n- Hand ball, state level championship.\n\nHe has Represented his school for CBSE National Level Swimming championship.\n\nHe is very passionate about his business and his Iron games.\n\nHis wife Akanksha Shah, who is a Businesswomen always supports him and guides him.\n\nSo let's welcome someone whose burning desire is to inspire people and students, that nothing is impossible in life, if you love yourself...He is none other than, the multi tasker, the passionate sportsmen, Mr. Rohan Shah`}
        />


      </div>
    </div>
  );
};

export default AboutPage; 