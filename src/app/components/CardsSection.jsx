import Image from "next/image"

const CardSection = () => {
  return <>
    {/* Cards Section */}
    <section className="w-full flex flex-col items-center py-14">
      <h2 className="text-5xl md:text-7xl font-extrabold mb-20 text-black text-center" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1px' }}>
        Heading 1
      </h2>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 w-full">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-orange-500 rounded-2xl shadow-lg p-6 w-44 md:w-56 transition-all duration-300 hover:scale-110 hover:scale-y-125 hover:shadow-2xl">
          <Image src="/rohan3.png" alt="Businessman" width={400} height={400} className="rounded-full object-cover mb-2" />
          <h3 className="font-bold text-white text-2xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Businessman</h3>
          <p className="text-white text-base text-center mb-3">Short description about being a businessman.</p>
          <button className="text-white border-2 border-white rounded-lg px-4 py-1.5 text-sm font-semibold hover:bg-white hover:text-orange-500 transition" style={{ fontFamily: 'Poppins, sans-serif' }}>Read More</button>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center bg-sky-500 rounded-2xl shadow-lg p-6 w-44 md:w-56 transition-all duration-300 hover:scale-110 hover:scale-y-125 hover:shadow-2xl">
          <Image src="/rohan2.png" alt="Orator" width={400} height={400} className="rounded-full object-cover mb-2" />
          <h3 className="font-bold text-white text-2xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Orator</h3>
          <p className="text-white text-base text-center mb-3">Short description about being an orator.</p>
          <button className="text-white border-2 border-white rounded-lg px-4 py-1.5 text-sm font-semibold hover:bg-white hover:text-sky-500 transition" style={{ fontFamily: 'Poppins, sans-serif' }}>Read More</button>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center bg-blue-200 rounded-2xl shadow-lg p-6 w-44 md:w-56 transition-all duration-300 hover:scale-110 hover:scale-y-125 hover:shadow-2xl">
          <Image src="/rohan6.png" alt="Model" width={400} height={400} className="rounded-full object-cover mb-2" />
          <h3 className="font-bold text-black text-2xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Model</h3>
          <p className="text-black text-base text-center mb-3">Short description about being a model.</p>
          <button className="text-black border-2 border-black rounded-lg px-4 py-1.5 text-sm font-semibold hover:bg-black hover:text-white transition" style={{ fontFamily: 'Poppins, sans-serif' }}>Read More</button>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-center bg-gray-400 rounded-2xl shadow-lg p-6 w-44 md:w-56 transition-all duration-300 hover:scale-110 hover:scale-y-125 hover:shadow-2xl">
          <Image src="/rohan2.png" alt="Reformer" width={400} height={400} className="rounded-full object-cover mb-2" />
          <h3 className="font-bold text-white text-2xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Reformer</h3>
          <p className="text-white text-base text-center mb-3">Short description about being a reformer.</p>
          <button className="text-white border-2 border-white rounded-lg px-4 py-1.5 text-sm font-semibold hover:bg-white hover:text-gray-400 transition" style={{ fontFamily: 'Poppins, sans-serif' }}>Read More</button>
        </div>
        {/* Card 5 */}
        <div className="flex flex-col items-center bg-green-600 rounded-2xl shadow-lg p-6 w-44 md:w-56 transition-all duration-300 hover:scale-110 hover:scale-y-125 hover:shadow-2xl">
          <Image src="/rohan.png" alt="Athlete" width={400} height={400} className="rounded-full object-cover mb-2" />
          <h3 className="font-bold text-white text-2xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Athlete</h3>
          <p className="text-white text-base text-center mb-3">Short description about being an athlete.</p>
          <button className="text-white border-2 border-white rounded-lg px-4 py-1.5 text-sm font-semibold hover:bg-white hover:text-green-600 transition" style={{ fontFamily: 'Poppins, sans-serif' }}>Read More</button>
        </div>
      </div>
    </section>

  </>
}

export default CardSection