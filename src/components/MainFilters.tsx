import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform, PlatformService } from "../service";

interface Props {
  selectPlatform: (id: number) => void;
}

const MainFilters = ({ selectPlatform }: Props) => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);

  useEffect(() => {
    PlatformService.getAll().then((response) => {
      setPlatforms(response.data.results);
    });
  }, []);

  return (
    <div className="relative flex gap-5">
      <div className="flex gap-4">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center rounded-md bg-neutral-200 dark:bg-neutral-800 px-4 py-2 text-md fon t-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Platforms
              <BsChevronDown
                className="ml-2 -mr-1 h-5 w-5 text-neutral-800 dark:text-neutral-300"
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
            <Menu.Items className="absolute w-56 left-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-neutral-900 shadow-lg dark:border dark:border-neutral-600 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                {platforms.map((platform) => {
                  return (
                    <Menu.Item key={platform.id}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400"
                              : "text-neutral-900 dark:text-neutral-300"
                          } w-full text-left rounded-md px-2 py-2 text-md`}
                          onClick={() => selectPlatform(platform.id)}
                        >
                          {platform.name}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center rounded-md bg-neutral-200 dark:bg-neutral-800 px-4 py-2 text-md fon t-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Order by: Relevance
              <BsChevronDown
                className="ml-2 -mr-1 h-5 w-5 text-neutral-800 dark:text-neutral-300"
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
            <Menu.Items className="absolute w-56 left-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-neutral-900 shadow-lg dark:border dark:border-neutral-600 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400"
                          : "text-neutral-900 dark:text-neutral-300"
                      } w-full text-left rounded-md px-2 py-2 text-md`}
                      onClick={() => {
                        setPlatform("PC");
                      }}
                    >
                      PC
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400"
                          : "text-neutral-900 dark:text-neutral-300"
                      } w-full text-left rounded-md px-2 py-2 text-md`}
                    >
                      Commodore / Amigo
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400"
                          : "text-neutral-900 dark:text-neutral-300"
                      } w-full text-left rounded-md px-2 py-2 text-md`}
                    >
                      Playstation
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default MainFilters;
