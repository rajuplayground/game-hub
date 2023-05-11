import { Fragment, useEffect, useRef, useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import logo from "./assets/logo.webp";
import gameIcon from "./assets/game-icon-ph.jpg";
import { TbSearch } from "react-icons/tb";
import { BsChevronDown } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header className="flex items-center gap-2 py-3 px-4">
        <div>
          <img className="w-[60px] aspect-square" src={logo} alt="" />
        </div>
        <div className="flex-1">
          <form>
            <label for="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-neutral-500 dark:text-neutral-200"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="block w-full p-2 pl-10 text-md text-neutral-800 rounded-full bg-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-800  transition focus:bg-white focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-900 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search games..."
                required=""
              />
            </div>
          </form>
        </div>
        <ToggleTheme />
      </header>
      <main className="px-4 flex items-baseline">
        <div className="w-[250px] space-y-3 hidden lg:block">
          <h2 className="text-2xl font-bold dark:text-white">Genres</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 font-thin text-neutral-500 dark:text-neutral-200">
              <img
                src={gameIcon}
                alt=""
                className="w-[32px] aspect-square object-cover rounded-md"
              />
              <span>Action</span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-5xl dark:text-white">Games</h1>
          <div>
            {/* <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Options
                  <BsChevronDown
                    className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Edit
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Duplicate
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Archive
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Move
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Delete
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
