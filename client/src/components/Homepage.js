import React from 'react'

const Homepage = () => {

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            OPDF
                            <br className="hidden md:block" />
                            Devil Fruit Encyclopedia
                            <span className="inline-block text-deep-purple-accent-400">
                                
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Your one stop shop for all thing devil fruit related in the world of One Piece
                        </p>
                    </div>
                    <div>
                        <a
                            href="/dashboard"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Open encyclopedia
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://i.pinimg.com/originals/42/c7/72/42c772c8237b3586587767f9c3ab9fea.png"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://e7.pngegg.com/pngimages/445/242/png-clipart-monkey-d-luffy-gomu-gomu-no-mi-one-piece-devil-fruit-paramecia-all-kinds-of-fruit-purple-violet.png"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://i.pinimg.com/736x/db/a6/45/dba6457200ca668db9186087529ed192.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
