import tarunImg from './team/tarun.jpg';
import sahidImg from './team/sahid.jpg';
import { Linkedin } from 'lucide-react';

function Team() {
  return (
    <section className="py-20 px-4 text-center flex flex-col items-center w-full  h-[90vh] max-sm:h-375">
      <h2 className="text-7xl mb-4 ">Meet Our Team </h2>
      <p className='text-2xl text-gray-800 mb-12'>The people behind the brand</p>
      <div className="max-w-9xl  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 h-full ">
        <div className="bg-white rounded-lg shadow-lg p-6 h-10/11 mb-10 w-96 hover:scale-105 transition-transform duration-300">
          <img
            src={tarunImg}
            alt="Tarun"
            className="w-2/3 mx-auto mb-4"
          />
          <h3 className="text-2xl ">Tarun</h3>
          <p className="text-brand-terracotta text-[14px]">Founder & CEO</p>
          <p className="text-black text-[12px] ">Passionate about sustainable fashion and minimal design. Started ThreadVerse in 2022 with a vision to make eco-friendly clothing accessible to everyone.</p>
          <div className='flex flex-row w-full  mx-auto justify-center  mt-1.5'>
            <Linkedin className="w-7 h-7 text-brand-terracotta hover:scale-125 hover:text-brand-terracotta p-1 rounded-md mr-2  transition-all 300 ease-in-out" />
            <a
              href="https://www.linkedin.com/in/jangra-tarun/" className='text-black/40 hover:text-brand-terracotta font-medium text-sm flex items-center '>
              Connect on Linkedin
            </a>

          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 h-10/11 w-96 hover:scale-105 transition-transform duration-300">
          <img
            src={sahidImg}
            alt="Sahid"
            className="w-4/5 h-72 mx-auto mb-4 object-cover"
          />
          <h3 className="text-2xl text-black">Sahid</h3>
          <p className="text-brand-terracotta text-[14px]">Co-Founder</p>
          <p className="text-black text-[12px] ">Passionate about sustainable fashion and minimal design. Started ThreadVerse in 2022 with a vision to make eco-friendly clothing accessible to everyone.</p>

            <div className='flex flex-row w-full  mx-auto justify-center mt-4 max-sm:pb-10'>
            <Linkedin className="w-7 h-7 text-brand-terracotta hover:scale-125 hover:text-brand-terracotta p-1 rounded-md mr-2  transition-all 300 ease-in-out " />
            <a
              href="https://www.linkedin.com/in/jangra-tarun/" className='text-black/40 hover:text-brand-terracotta font-medium text-sm flex items-center'>
              Connect on Linkedin
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Team