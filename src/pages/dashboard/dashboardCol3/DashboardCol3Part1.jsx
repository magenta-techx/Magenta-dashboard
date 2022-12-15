import React, { useEffect } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Branch from "../../../components/Branch";
import { ItemContext } from "../../../contextApi/stateMang.contextApi";
const DashboardCol3Part1 = () => {
  const {
    state: { branchDetails },
    Get_Branch,
  } = ItemContext();
  useEffect(() => {
    Get_Branch();
  }, [branchDetails]);
  return (
    <div className="w-8/12 border rounded-lg shadow-md h-fit flex flex-col p-4 gap-4">
      <div className="flex justify-between">
        <h1 className="font-medium text-xl">Company Branch</h1>
        <p className="text-[rgba(0,0,0,0.6)]">
          last updated <span className="text-black s">16-9-2022</span>
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
      <table className="border h-fit w-full py-4">
        <thead>
          <tr className="border-b  bg-[#F7F9FA]">
            <th className="py-3 font-medium">Branch name</th>
            <th className="py-3 font-medium">Branch ID</th>
            <th className="py-3 font-medium">Date added</th>
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
                  <td className="py-2">{branch.name}</td>
                  <td className="py-2">{branch.id}</td>
                  <td className="py-2">{branch.created_at.substring(0, 10)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {branchDetails?.length > 3 && (
        <div className="flex cursor-pointer text-[#4E00AD] items-center gap-6 mt-2  justify-end">
          <p>View all</p>
          <HiOutlineArrowRight className="text-xl" />
        </div>
      )}
    </div>
  );
};

export default DashboardCol3Part1;
