import React from "react";
import introduction from "../image/investment.png";
import loan from "../image/loan 2.png";
import saving from "../image/SAVING 2.png";
import DashboardLayout from "../components/layouts/DashboardLayout";

const Saving = () => {
  const InfoBox = ({ text, img }) => (
    <div className="relative">
      <img src={img} alt="i" className="" />
      <div className="absolute top-0 right-0 p-2 bg-green-500 text-white">
        {text}
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="flex justify-center items-center pb-20 gap-x-8 cursor-pointer">
        <InfoBox text="Save" img={introduction} />

        <InfoBox text="Loan" img={loan} />

        <InfoBox text="Invest" img={saving} />
      </div>

     
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                <th scope="col" className="px-6 py-3">
                    FullName
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ID#44
                </th>
                <td className="px-6 py-4">
                Saving
                </td>
                <td className="px-6 py-4">
                     Janeth Mosha
                </td>
                <td className="px-6 py-4">
                    Deposited
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ID#43
                </th>
                <td className="px-6 py-4">
                    Loan
                </td>
                <td className="px-6 py-4">
                    Abdul Ukwaju
                </td>
                <td className="px-6 py-4">
                    Processed
                </td>
              
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:text-white dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   ID#42
                </th>
                <td className="px-6 py-4">
                    Loan
                </td>
                <td className="px-6 py-4">
                    Bidaus Bisendo
                </td>
                <td className="px-6 py-4">
                    Granted
                </td>
                
            </tr>
        </tbody>
    </table>
</div>

    </DashboardLayout>
  );
};

export default Saving;
