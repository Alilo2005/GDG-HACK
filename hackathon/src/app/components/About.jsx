'use client';

const AboutUs = () => {
    return (
        <section className="bg-gray-900 flex items-center justify-center min-h-screen border border-blue-400 border-opacity-50">
            <div className="container px-6 py-12 mx-auto text-center">
                <div>
                    <h1 className="font-extrabold text-8xl m-16 text-blue-400">About us</h1>

                    <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Who we are</h1>

                    <p className="mt-3 text-gray-400">Learn more about our team and mission.</p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                        <div className="text-center">
                            <span className="inline-block  p-3 text-blue-400 rounded-full bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z" />
                                </svg>
                            </span>

                            <h2 className="mt-4  font-medium text-white">Our Mission</h2>
                            <p className="mt-2 text-sm text-gray-400">To empower developers and foster innovation through community-driven events and resources.</p>
                        </div>

                        <div className="text-center">
                            <span className="inline-block p-3 text-blue-400 rounded-full bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z" />
                                </svg>
                            </span>
                    
                            <h2 className="mt-4 text-base font-medium text-white">Our Vision</h2>
                            <p className="mt-2 text-sm text-gray-400">To be the leading platform for developer growth and collaboration worldwide.</p>
                        </div>

                        <div className="text-center">
                            <span className="inline-block p-3 text-blue-400 rounded-full bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z" />
                                </svg>
                            </span>
                    
                            <h2 className="mt-4 text-base font-medium text-white">Our Values</h2>
                            <p className="mt-2 text-sm text-gray-400">Innovation, Collaboration, and Community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;