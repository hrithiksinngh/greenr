import { Disclosure, Transition } from "@headlessui/react";
import Desc from "../desc/desc";
import Title from "../title/title";
import disStyle from "./customDisc.module.scss";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const DisclosureSectorsInclude = (props) => {
  let { iconUrl, disTitle, disDesc, isIcon } = props;
  return (
    <Disclosure>
      {({ open }) => (
        <div
          className={`${open ? "borderStyle" : ""} ${
            disStyle.mainConatiner
          } pt30 px-6`}
        >
          <Disclosure.Button
            className={`pb30 w-[100%] flex justify-between ease-linear duration-150 items-center`}
          >
            <div className="flex items-center">
              {isIcon && iconUrl && (
                <div className="w-10 h-10 mr-4 relative">
                  <Image
                    src={iconUrl}
                    alt={disTitle}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}
              <Title title={disTitle} externalClass={` text-left f16`} />
            </div>
            <div className="">
              <ChevronDownIcon
                className={`w-[32px] duration-200 ease-out ${
                  open ? "rotate-180 transform" : ""
                }`}
              />
            </div>
          </Disclosure.Button>
          <Transition
            enter="transition duration-500 ease-linear"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-750 ease-linear"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>
              <Desc
                externalClass={`text-slate-600 pb30 my-auto transform scale-100  duration-200 ease-out`}
                desc={disDesc}
              />
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default DisclosureSectorsInclude;
