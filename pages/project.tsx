import Head from "next/head";
import Sidebar from "./components/sidebar";

export default function Project() {
    return (
        <>
            <Head>
                <title>Projects | Awan Aprilino</title>
                <meta name="description" content="Project Awan Aprilino" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
                <Sidebar />
                <main className="basis-3/4">
                    <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src="/project/awanpc.png"
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Awanpc (CMS)
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    This project was made because I like blogging, writing articles and sharing them with many people.
                                </p>
                                <p className="mb-3">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-green-600 bg-green-200 last:mr-0 mr-1">
                                        ExpressJs
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1">
                                        MySQL
                                    </span>
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Visit Site
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4 ml-2 -mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src="/project/wafikasi.png"
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Wafikasi (Whatsapp Notification)
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Send messages and notifications using WhatsApp easily.
                                </p>
                                <p className="mb-3">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200 last:mr-0 mr-1">
                                        Laravel
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-green-600 bg-green-200 last:mr-0 mr-1">
                                        NodeJs
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1">
                                        MySQL
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src="/project/gaweyo-mobile.png"
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Gaweyo (GIg Jobs Platform)
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Gaweyo is a earning app just by completing missions.
                                </p>
                                <p className="mb-3">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200 last:mr-0 mr-1">
                                        Laravel
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-700 bg-blue-400 last:mr-0 mr-1">
                                        ReactJs
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-green-600 bg-green-200 last:mr-0 mr-1">
                                        Flutter
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1">
                                        MySQL
                                    </span>
                                </p>
                                <a
                                    href="https://www.gaweyo.com"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Visit Site
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4 ml-2 -mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src="/project/sibad.png"
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Sibad (Fund Distribution System)
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Sibad is a system for distributing funds from the Governor of Central Java to villages in Central Java.
                                </p>
                                <p className="mb-3">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200 last:mr-0 mr-1">
                                        Laravel
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1">
                                        MySQL
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
