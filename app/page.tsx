"use server";

import Header from "@/components/Header";

export default async function Home() {
  return (
    <main>
      <Header />
      <div className="flex items-center justify-center p-10 mt-14">
        Triển khai OAuth và JWT để tăng cường bảo mật API
      </div>
    </main>
  );
}
