import React from 'react';

const ServiceStatus = ({service}) => {
    console.log(service)
    return (
        <div>
             <tr key={service._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={service.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.title}</div>
                      <div className="text-sm opacity-50">{service?.area}</div>
                    </div>
                  </div>
                </td>
                <td>
                  ${service?.price}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span> */}
                </td>
                <td>{service?.description.substring(0, 25)}...</td>
                <th className="space-x-2 flex">
                  <Link to={`/updateService/${service?._id}`}>
                    <button
                      // onClick={() =>
                      //   document.getElementById("my_modal_3").showModal()
                      // }
                      className="btn btn-ghost"
                    >
                      <BiEdit className="text-2xl text-green-600"></BiEdit>Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-ghost "
                  >
                    <FiDelete className="text-2xl text-red-500"></FiDelete>
                    Delete
                  </button>
                </th>
              </tr>
        </div>
    );
};

export default ServiceStatus;