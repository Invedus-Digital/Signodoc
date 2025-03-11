const Beliefs = () => {
    return (
      <div className="bg-gray-50 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
              Our Core Principles
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Bedrock of Our Commitment
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-600">
              These beliefs are not just words; they are the guiding principles that
              shape our solutions and drive us to exceed expectations, ensuring your
              success is at the heart of everything we do.
            </p>
          </div>
  
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* COLUMN-1: Security & Compliance */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="p-10 sm:p-12">
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-indigo-200 uppercase tracking-widest mb-3">
                    Unwavering Focus
                  </h2>
                  <h3 className="text-3xl font-extrabold text-white mb-5 leading-tight">
                    Security & Compliance
                  </h3>
                </div>
                <p className="text-indigo-200 text-lg mb-8">
                  In a landscape of evolving threats, we stand firm in our dedication
                  to security. We employ rigorous protocols and adhere to global
                  compliance standards, safeguarding your valuable data and
                  agreements with the utmost vigilance. Your trust is paramount, and
                  we relentlessly prioritize the protection of your digital assets.
                </p>
                <div className="flex justify-start mt-6">
                  <button className="bg-indigo hover:bg-indigo-500 shadow-md hover:shadow-lg text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-110">
                    Explore Security Practices
                  </button>
                </div>
              </div>
            </div>
  
            {/* COLUMN-2: Innovation & Efficiency */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-300 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="p-10 sm:p-12">
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-blue-200 uppercase tracking-widest mb-3">
                    Forward-Thinking Approach
                  </h2>
                  <h3 className="text-3xl font-extrabold text-white mb-5 leading-tight">
                    Innovation & Efficiency
                  </h3>
                </div>
                <p className="text-blue text-lg mb-8">
                  We champion innovation as the engine of progress. By integrating
                  cutting-edge technologies and forward-thinking strategies, we
                  deliver solutions that not only streamline your workflows but also
                  propel your business into new realms of efficiency. Embrace the
                  future with us, and transform operational bottlenecks into pathways
                  to success.
                </p>
                <div className="flex justify-start mt-6">
                  <button className="bg-blue hover:bg-blue-500 shadow-md hover:shadow-lg text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-110">
                    Discover Efficiency Solutions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Beliefs;
