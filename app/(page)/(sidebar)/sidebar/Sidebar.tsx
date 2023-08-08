// import SideComponent from "@/components/SideComponent";
// import Select from "@/components/ui/Select";
import Image from "next/image";
import React from "react";
import SideComponent from "../../../../components/SideComponent";
import Select from "../../../../components/ui/Select";

const Sidebar = () => {
  const menu = [
    { id: 1, name: "All" },
    { id: 2, name: "UI" },
    { id: 3, name: "UX" },
    { id: 4, name: "Enhancement" },
    { id: 5, name: "Bug" },
    { id: 6, name: "Feature" },
  ];

  const status = [
    { id: 1, name: "Planned", count: 2 },
    { id: 2, name: "In-Progress", count: 3 },
    { id: 3, name: "Live", count: 1 },
  ];

  return (
    <div className="flex gap-[1.5rem] flex-row lg:flex-col justify-center lg:justify-start">
      <SideComponent>
        <div className="relative w-full h-full overflow-hidden">
          <Image
            fill
            src="/assets/suggestions/desktop/background-header.png"
            className="aspect-square object-cover rounded-[0.625rem]"
            alt="Images"
          />
          <div className="absolute w-full h-full p-[1.5rem] flex flex-col justify-end">
            <span className="font-bold text-sm not-italic leading-normal text-[#fff]">
              Eqaim
            </span>
            <span className="font-medium text-sm not-italic leading-normal text-[#fff] opacity-75">
              Feedback Board
            </span>
          </div>
        </div>
      </SideComponent>
      <SideComponent>
        <div className="p-[1.5rem] flex w-full h-full flex-wrap gap-[0.5rem]">
          {menu?.map((item) => (
            <Select key={item.id} name={item.name} />
          ))}
        </div>
      </SideComponent>
      <SideComponent>
        <div className="w-full h-full p-[1.16rem_1.5rem_1.5rem_1.5rem] flex flex-col gap-[1.5rem]">
          <div className="flex justify-between">
            <span className="font-bold text-sm not-italic leading-normal text-[#3a4374]">
              Roadmap
            </span>
            <span className="underline text-[#4661e6] font-semibold text-sm not-italic leading-normal hover:text-[#8397F8] transition cursor-pointer">
              View
            </span>
          </div>
          <div className="flex flex-col">
            {status.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <span className="flex gap-[1rem] items-center justify-center">
                  <span className="w-[0.5rem] h-[0.5rem]">
                    {item.id === 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                      >
                        <circle cx="4" cy="4" r="4" fill="#F49F85" />
                      </svg>
                    )}
                    {item.id === 2 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                      >
                        <circle cx="4" cy="4" r="4" fill="#AD1FEA" />
                      </svg>
                    )}
                    {item.id === 3 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                      >
                        <circle cx="4" cy="4" r="4" fill="#62BCFA" />
                      </svg>
                    )}
                  </span>
                  <span className="font-normal text-xs text-[#647196]">
                    {item.name}
                  </span>
                </span>
                <span className="font-bold text-sm not-italic leading-normal text-[#647196]">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SideComponent>
    </div>
  );
};

export default Sidebar;
