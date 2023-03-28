import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar(){
    const router = useRouter();
    return (
        <aside className="basis-1/4 bg-white mb-6">
          <Link href="/">
            <img
              className="w-auto h-7"
              src="logo.png"
              alt=""
            />
          </Link>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="-ml-3 mr-5 space-y-6 ">
              <div className="space-y-3 ">
                <Link
                  className={router.pathname == "/" ? "md:flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg dark:text-gray-200" : "md:flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"}
                  href="/"
                >
                  <span className="mx-2 text-sm font-medium">home</span>
                </Link>
                <Link
                  className={router.pathname == "/about" ? "md:flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg dark:text-gray-200" : "md:flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"}
                  href="/about"
                >
                  <span className="mx-2 text-sm font-medium">about</span>
                </Link>
                <Link
                  className={router.pathname == "/skill" ? "md:flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg dark:text-gray-200" : "md:flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"}
                  href="/skill"
                >
                  <span className="mx-2 text-sm font-medium">skills</span>
                </Link>
                <Link
                  className={router.pathname == "/project" ? "md:flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg dark:text-gray-200" : "md:flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"}
                  href="/project"
                >
                  <span className="mx-2 text-sm font-medium">projects</span>
                </Link>
              </div>
            </nav>
          </div>
        </aside>
    )
}