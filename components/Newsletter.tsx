const Newsletter = () => {
  return(
      <div className='flex  flex-col items-center justify-center  py-2'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='flex  flex-col font-bold items-center justify-center py-2 '>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a]  shadow-2xl  hover:animate-pulse text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#0086df]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    
  );
};

export default Newsletter;


