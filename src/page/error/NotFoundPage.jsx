import React from "react";
export default function (){
    return(
        <>
        <div className="h-[100vh] flex flex-col justify-center">
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                            404
                        </h1>
                       <p className="md-4xl text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                            Something's wrong
                       </p>
                       <p className="md-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Sorry, we can't find that page ,You'll find lots to explore on the home page
                       </p>
                       <a href="/" className="initline-flex text-black bg-primary-600 hover:bg-cyan-600 focus:ring-4  focus:outline-one focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                        back to homepage
                       </a>
                    </div>

                </div>

            </section>

        </div>
        </>
    );
}