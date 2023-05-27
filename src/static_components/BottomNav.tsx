// import React from "react";
// import { useRecoilState } from "recoil";
// // import { activePageState } from "..";
// import { ReactComponent as GroupScan } from "../assets/svg/Group_scan.svg";
// import { ReactComponent as MapDuotoneLine } from "../assets/svg/Map_duotone_line.svg";
// import { useNavigate } from "react-router-dom";

// export default function BotomNav() {
//   const [activePage] = useRecoilState(activePageState);
//   const navigate = useNavigate();

//   return (
//     <footer className="sticky bottom-0 w-full  h-[3.125rem] bg-[#212121] align-middle flex content-center align-center items-center justify-center ">
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//         className={`flex flex-col items-center justify-center px-3 hover:bg-[#343434] ${
//           activePage.title === "Friends" && "bg-[#343434]"
//         }`}
//       >
//         <GroupScan />
//         <p className="text-[#0A84FF] text-[0.625rem]">Friends</p>
//       </button>
//       <button
//         onClick={() => {
//           navigate("/Nearby");
//         }}
//         className={`flex flex-col items-center justify-center px-3 hover:bg-[#343434] ${
//           activePage.title === "Nearby" && "bg-[#343434]"
//         }`}
//       >
//         <MapDuotoneLine />
//         <p className="text-[#0A84FF] text-[0.625rem]">Nearby</p>
//       </button>
//     </footer>
//   );
// }
export {}