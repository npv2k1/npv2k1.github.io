import Header from "@/components/Header";
import Posts from "@/components/Posts";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  const displayName = "Nguyen Pham";
  const description = "@npv2k1";
  const coverImg = "cover.webp";
  const profileImg ="meface.jpg";
  return (
    <div className="flex flex-col">
      <Header
        displayName={displayName}
        coverImg={coverImg}
        profileImg={profileImg}
        description={description}        
      />
      <div className="pb-96 h-full bg-[#F0F2F5]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row  justify-center space-x-2">
          <Sidebar />
          <Posts />
        </div>
      </div>
    </div>
  );
}