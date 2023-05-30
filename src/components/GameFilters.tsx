import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

import _ from "lodash";
import { Platform } from "../service/PlatformService";
import useGameQuery from "../hooks/useGameQuery";

const GameFilters = () => {
  const { data, error: platformError, isLoading } = usePlatforms();
  const { gameQuery, setPlatform, setSort } = useGameQuery();

  const platforms = data?.results;

  const orderby: string[] = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
    "metacritic",
  ];

  const handlePlatform = (p: Platform) => {
    setPlatform(p);
  };

  const handleOrder = (order: string) => {
    setSort(order);
  };

  return (
    <div className="relative flex gap-5">
      <div className="flex gap-4">
        {!platformError && platforms && (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex items-center rounded-md bg-neutral-200 dark:bg-neutral-800 px-4 py-2 text-md fon t-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {gameQuery.platform ? gameQuery.platform.name : "Platforms"}
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
                            onClick={() => {
                              handlePlatform(platform);
                            }}
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
        )}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center rounded-md bg-neutral-200 dark:bg-neutral-800 px-4 py-2 text-md fon t-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Order by:{" "}
              {gameQuery.sortOrder
                ? _.capitalize(gameQuery.sortOrder)
                : "Relevance"}
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
                {orderby.map((order) => {
                  return (
                    <Menu.Item key={order}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400"
                              : "text-neutral-900 dark:text-neutral-300"
                          } w-full text-left rounded-md px-2 py-2 text-md`}
                          onClick={() => {
                            handleOrder(order);
                          }}
                        >
                          {_.capitalize(order)}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default GameFilters;
