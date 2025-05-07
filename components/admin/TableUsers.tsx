"use client";

import { useDisableUser, useGetAllUser } from "@/utils/auth";

const TableUsers = () => {
  const { data, isLoading } = useGetAllUser();
  const { mutate: disableFn } = useDisableUser();

  const handleDisable = (userId: string) => {
    disableFn(userId);
  };
  return (
    <div>
      <table className="w-full table-auto border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gray-100 text-gray-700 uppercase text-sm font-semibold">
          <tr>
            <th className="border px-6 py-3 text-left">ID</th>
            <th className="border px-6 py-3 text-left">Username</th>
            <th className="border px-6 py-3 text-left">Name</th>
            <th className="border px-6 py-3 text-left">Address</th>
            <th className="border px-6 py-3 text-left">Phone</th>
            <th className="border px-6 py-3 text-left">Gender</th>
            <th className="border px-6 py-3 text-left">Role</th>
            <th className="border px-6 py-3 text-left">Status</th>
            <th className="border px-6 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-sm">
          {!isLoading &&
            data?.map((user: any) => (
              <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                <td className="border px-6 py-3">{user._id}</td>
                <td className="border px-6 py-3">{user.username}</td>
                <td className="border px-6 py-3">{user.fullname}</td>
                <td className="border px-6 py-3">{user.address}</td>
                <td className="border px-6 py-3">{user.phone}</td>
                <td className="border px-6 py-3">{user.gender}</td>
                <td className="border px-6 py-3">{user.rule}</td>

                {user.lockedUntil ? (
                  <>
                    <td className="border px-6 py-3 text-red-400 font-bold">
                      locked
                    </td>
                    <td className="border px-6 py-3">
                      <button
                        // onClick={() => handleDisable(user._id)}
                        className="text-green-400 font-bold hover:underline"
                      >
                        Unloked
                      </button>
                    </td>
                  </>
                ) : (
                  (user.disable && (
                    <>
                      <td className="border px-6 py-3 text-red-400 font-bold">
                        disable
                      </td>
                      <td className="border px-6 py-3">
                        <button
                          onClick={() => handleDisable(user._id)}
                          className="text-green-400 font-bold hover:underline"
                        >
                          Undisable
                        </button>
                      </td>
                    </>
                  )) || (
                    <>
                      <td className="border px-6 py-3 text-green-400 font-bold">
                        active
                      </td>
                      <td className="border px-6 py-3">
                        <button
                          onClick={() => handleDisable(user._id)}
                          className="text-red-600 hover:underline"
                        >
                          Disable
                        </button>
                      </td>
                    </>
                  )
                )}

                {/* <td className="border px-6 py-3">
                  <button
                    onClick={() => handleDisable(user._id)}
                    className="text-red-600 hover:underline"
                  >
                    Disable
                  </button>
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
