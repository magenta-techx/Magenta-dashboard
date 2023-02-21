import React, { useEffect } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Branch from "../../../components/Branch";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";
const DashboardCol3Part1 = () => {
  const {
    state: { branchDetails },
    Get_Branch
  } = ItemContext();
  useEffect(() => {
    Get_Branch();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="w-8/12 border rounded-lg shadow-md h-fit flex flex-col p-4 gap-4">
      <div className="flex justify-between">
        <h1 className="font-medium text-xl albert">Company Branch</h1>
        <p className="text-[rgba(0,0,0,0.6)] albert text-sm font-normal">
          last updated <span className="text-black font-medium">16-9-2022</span>
        </p>
      </div>
      {/* <div className="border h-fit w-full py-4">
        <div className="flex justify-between border-b p-2 bg-[#F7F9FA]">
          <h1>Branch name</h1>
          <h1>Branch ID</h1>
          <h1>Date added</h1>
        </div>
        <div className="content-dashboard ">
          {branchDetails
            .filter((branch, idx) => {
              return idx < 3;
            })
            .map((branch) => {
              return (
                <div className="flex justify-between   p-2 ">
                  <small>{branch.name}</small>
                  <small className="flex justify-center">{branch.id}</small>
                  <small>{branch.created_at.substring(0, 10)}</small>
                </div>
              );
            })}
        </div>
      </div> */}
      <table
        className="border h-fit w-full py-4 albert"
        onClick={() => console.log("object")}
      >
        <thead>
          <tr className="border-b  bg-[#F7F9FA]">
            <th className="py-3 font-medium  text-[16px]">Branch name</th>
            <th className="py-3 font-medium text-[16px]">Branch ID</th>
            <th className="py-3 font-medium text-[16px]">Date added</th>
          </tr>
        </thead>
        <tbody className="content-dashboard">
          {branchDetails
            .filter((branch, idx) => {
              return idx < 3;
            })
            .map((branch, idx) => {
              return (
                <tr className="text-center" key={idx}>
                  <td className="py-2 font-normal text-sm">{branch.name}</td>
                  <td className="py-2 font-normal text-sm">{branch.id}</td>
                  <td className="py-2 font-normal text-sm">
                    {branch.created_at.substring(0, 10)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {branchDetails?.length > 3 && (
        <div
          onClick={() => {
            console.log("object");
            navigate("branch/all");
            document.documentElement.scrollTop = 0;
          }}
          className="flex cursor-pointer text-[#4E00AD] items-center gap-6 mt-2  justify-end albert"
        >
          <p className="font-medium text-[16px]">View all</p>
          <HiOutlineArrowRight className="text-xl" />
        </div>
      )}
    </div>
  );
};

export default DashboardCol3Part1;
