"use client";

import { CardDetailsProps } from "@/types";
import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

const CarDetails = ({ isOpen, close, car }: CardDetailsProps) => {
  const keys = [];
  for (const key in car) {
    keys.push(key);
  }

  return (
    <>
      <Transition appear={isOpen} as={Fragment} show={isOpen && true}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-200"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-200 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative flex flex-col gap-5 transition-all w-full p-6 max-w-lg max-h-[90vh] rounded-2xl transform bg-white overflow-y-auto text-left shadow-xl ">
                  <button
                    className="absolute top-2 right-2 rounded-full z-10 bg-white p-1"
                    type="button"
                    onClick={close}
                  >
                    <Image
                      src="./close.svg"
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        alt="car"
                        src="/hero.png"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          alt="car"
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          alt="car"
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          alt="car"
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="capitalize font-semibold text-xl">
                      {car.make} {car.model}
                    </h2>
                    <div className="flex-1 flex flex-col mt-3 gap-4 flex-wrap">
                      {Object.entries(car).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center w-full">
                          <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
                          <p className="text-black-100 font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
