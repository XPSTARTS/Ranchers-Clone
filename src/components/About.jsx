import React from 'react'

const About = () => {
  return (
    <div className='mt-10 mx-4 md:mx-8'>
      {/* Tale Untold Section */}
      <h1 className='font-extrabold text-orange-400 text-2xl md:text-3xl mb-4'>A Tale Untold</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <p className='font-extrabold text-sm md:text-md leading-6 md:leading-7 lg:w-[90%] xl:w-[80%]'>
          One night aftr' a long day ov' showdowns, a couple of cowboys came together to cook up sum monstrous burgers to fill up their empty bellies. Texas Jack, one of them, said to ye others "I want meself a meal like this every single day!". Bill, who was cookin' up the finger licking meat thought why not? So, he started cooking up the biggest, messiest and mightiest burgers the town had ever devoured!
          <br />
          <br />
          And with this came "Ranchers", the ranch where all cowboys came after a hard day to re-fuel themselves with the juiciest and meatiest burgers in all of town.
        </p>

        <img 
          src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FaboutUsLogo.de994ccd.png&w=600&q=75" 
          className='w-64 md:w-80 h-auto mx-auto lg:mx-0' 
          alt="About Us Logo"
        />
      </div>

      {/* Why we are irresistible Section */}
      <div className='mt-12'>
        <h1 className='font-extrabold text-orange-400 text-2xl md:text-3xl mb-4'>Why we are irresistible?</h1>

        <p className='font-extrabold text-sm md:text-md leading-6 md:leading-7 lg:w-[70%] mb-8'>
          No cowboy has ever gone back unsatisfied from the Ranch.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {/* Card 1 */}
          <div className='w-64 border-2 p-4 rounded-lg flex flex-col items-center'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fburger.77d3a868.png&w=400&q=75" 
              className='w-32 h-32 object-contain mb-2'
              alt="Burger"
            />
            <p className='font-extrabold text-sm md:text-md text-center'>
              Our Burgers Speakes For Themselves.
            </p>
          </div>

          {/* Card 2 */}
          <div className='w-64 border-2 p-4 rounded-lg flex flex-col items-center'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmoney.6cda1dd4.png&w=400&q=75" 
              className='w-32 h-32 object-contain mb-2'
              alt="Money"
            />
            <p className='font-extrabold text-sm md:text-md text-center'>
              Value For Money Keeps You Come Back Fr' More.
            </p>
          </div>

          {/* Card 3 */}
          <div className='w-64 border-2 p-4 rounded-lg flex flex-col items-center'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frating.22179032.png&w=400&q=75" 
              className='w-32 h-32 object-contain mb-2'
              alt="Rating"
            />
            <p className='font-extrabold text-sm md:text-md text-center'>
              We Give A Mighty Fine Experience.
            </p>
          </div>
        </div>
      </div>

      <div className='mt-12 mb-10'>
        <h1 className='font-extrabold text-orange-400 text-2xl md:text-3xl mb-6'>Locations</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
          <div className='border-2 p-3 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfaisalMosque.c8890d41.png&w=400&q=75" 
              className='w-20 h-20 md:w-24 md:h-24 object-contain mb-2'
              alt="Islamabad"
            />
            <p className='font-extrabold text-sm md:text-base text-center'>Islamabad.</p>
          </div>

          <div className='border-2 p-3 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frawalpindi.1f5b4153.png&w=400&q=75" 
              className='w-20 h-20 md:w-24 md:h-24 object-contain mb-2'
              alt="Rawalpindi"
            />
            <p className='font-extrabold text-sm md:text-base text-center'>Rawalpindi.</p>
          </div>

          <div className='border-2 p-3 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FminarePak.173e17d1.png&w=400&q=75" 
              className='w-20 h-20 md:w-24 md:h-24 object-contain mb-2'
              alt="Lahore"
            />
            <p className='font-extrabold text-sm md:text-base text-center'>Lahore.</p>
          </div>

          <div className='border-2 p-3 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsialkot.5cb11523.png&w=400&q=75" 
              className='w-20 h-20 md:w-24 md:h-24 object-contain mb-2'
              alt="Sialkot"
            />
            <p className='font-extrabold text-sm md:text-base text-center'>Sialkot.</p>
          </div>

          <div className='border-2 p-3 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgujranwala.70272c96.png&w=400&q=75" 
              className='w-20 h-20 md:w-24 md:h-24 object-contain mb-2'
              alt="Gujranwala"
            />
            <p className='font-extrabold text-sm md:text-base text-center'>Gujranwala.</p>
          </div>

          <div className='border-2 p-3 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsialkot.5cb11523.png&w=400&q=75" 
              className='w-20 h-20 md:w-24 md:h-24 object-contain mb-2'
              alt="Faisalabad"
            />
            <p className='font-extrabold text-sm md:text-base text-center'>Faisalabad.</p>
          </div>

          <div className='border-2 p-3 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsargodha.21f47378.png&w=400&q=75" 
              className='w-20 h-20 md:w-24 md:h-24 object-contain mb-2'
              alt="Sargodha"
            />
            <p className='font-extrabold text-sm md:text-base text-center'>Sargodha.</p>
          </div>

          <div className='border-2 p-3 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow'>
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeshawar.cfb7e4e1.png&w=400&q=75" 
              className='w-20 h-20 md:w-24 md:h-24 object-contain mb-2'
              alt="Peshawar"
            />
            <p className='font-extrabold text-sm md:text-base text-center'>Peshawar.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About