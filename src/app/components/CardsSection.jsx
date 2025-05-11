import Image from "next/image"

const CardSection = ()=>{
    return <>
     {/* Cards Section */}
     <section className="w-full flex flex-col items-center py-10 bg-white">
        <h2 className="text-3xl md:text-6xl font-bold mb-8 text-black text-center">Heading 1</h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-orange-400 rounded-xl shadow-lg p-4 w-40 md:w-48">
            <Image src="/rohan3.png" alt="Businessman" width={400} height={400} className="rounded-full object-cover" />
            <h3 className="font-bold text-white text-xl mb-1">Businessman</h3>
            <p className="text-white text-sm text-center mb-2">Short description about being a businessman.</p>
            <button className="text-white border border-white rounded px-3 py-1 text-xs hover:bg-white hover:text-orange-400 transition">Read More</button>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center bg-sky-400 rounded-xl shadow-lg p-4 w-40 md:w-48">
            <Image src="/rohan2.png" alt="Orator" width={400} height={400} className="rounded-full  object-cover" />
            <h3 className="font-bold text-white text-xl mb-1">Orator</h3>
            <p className="text-white text-sm text-center mb-2">Short description about being an orator.</p>
            <button className="text-white border border-white rounded px-3 py-1 text-xs hover:bg-white hover:text-sky-400 transition">Read More</button>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center bg-blue-200 rounded-xl shadow-lg p-4 w-40 md:w-48">
            <Image src="/rohan6.png" alt="Model" width={400} height={400} className="rounded-full  object-cover" />
            <h3 className="font-bold text-black text-xl mb-1">Model</h3>
            <p className="text-black text-sm text-center mb-2">Short description about being a model.</p>
            <button className="text-black border border-black rounded px-3 py-1 text-xs hover:bg-black hover:text-white transition">Read More</button>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center bg-gray-400 rounded-xl shadow-lg p-4 w-40 md:w-48">
            <Image src="/rohan2.png" alt="Reformer" width={400} height={400} className="rounded-full  object-cover" />
            <h3 className="font-bold text-white text-xl mb-1">Reformer</h3>
            <p className="text-white text-sm text-center mb-2">Short description about being a reformer.</p>
            <button className="text-white border border-white rounded px-3 py-1 text-xs hover:bg-white hover:text-gray-400 transition">Read More</button>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col items-center bg-green-600 rounded-xl shadow-lg p-4 w-40 md:w-48">
            <Image src="/rohan.png" alt="Athlete" width={400} height={400} className="rounded-full  object-cover" />
            <h3 className="font-bold text-white text-xl mb-1">Athlete</h3>
            <p className="text-white text-sm text-center mb-2">Short description about being an athlete.</p>
            <button className="text-white border border-white rounded px-3 py-1 text-xs hover:bg-white hover:text-green-600 transition">Read More</button>
          </div>
        </div>
      </section>
    
    </>
}

export default CardSection