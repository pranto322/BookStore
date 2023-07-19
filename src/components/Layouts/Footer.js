import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
        <div className="p-4 mx-auto max-w-screen-xl flex flex-wrap justify-between items-center relative sm:px-6 py-3 ">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to = "/" className="hover:underline">BookHouse</Link>All Right Reserved</span>
            <div>
                <Link to= "mailto:parijatsaha435@gmail.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 text-xl dark:hover:text-white">
                    <span className="bi bi-envelope-at-fill mr-5"></span>
                </Link>
                <Link to= "https://github.com/pranto322" target="_blank" rel="noreferrer" className="text-gray-500 text-xl hover:text-gray-900 dark:hover:text-white">
                    <span className="cursor:pointer bi bi-github mr-5"></span>
                </Link>
                <Link to="https://www.linkedin.com/in/prantozit-saha-parizat/" target="_blank" rel="noreferrer" className="text-gray-500 text-xl hover:text-gray-900 dark:hover:text-white">
                    <span className="cursor:pointer bi bi-linkedin mr-5"></span>
                </Link>
                
                

            </div>

        </div>

      
    </footer>
  )
}


