import React from "react";
import { useLoaderData } from "react-router-dom";

const ManageService = () => {
  const {myService} = useLoaderData();
//   const {image, price, title, area, description} = myService || {}
  console.log(myService);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>Service Name</th>
              <th>Price</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      {/* <img
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      /> */}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default ManageService;
