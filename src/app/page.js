import AllCakes from "@/component/allCakes/AllCakes";
import Banner from "@/component/banner/Banner";



export default function Home() {
  return (
    <div className="bg-[#ff66a3] min-h-screen">
      <main>
        <Banner></Banner>
        <AllCakes></AllCakes>
      </main>
    </div>
  );
}
