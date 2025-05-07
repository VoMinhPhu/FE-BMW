import Header from "@/components/Header";
import HandleOpenChangePass from "@/components/HandleOpenChangePass";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-14 px-12 py-8">
        <HandleOpenChangePass />
      </div>
    </div>
  );
};

export default page;
