import TableUsers from "@/components/admin/TableUsers";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)]">
      <Header />
      <div className="grid grid-cols-12 h-full w-full mt-14">
        <div className="border col-span-2 p-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600 pl-5 rounded-md hover:bg-gray-50 cursor-pointer">
            List user
          </p>
        </div>
        <div className="border col-span-10 p-4">
          <TableUsers />
        </div>
      </div>
    </div>
  );
};

export default page;
