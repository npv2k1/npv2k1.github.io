import Header from '@/components/Header';
import Posts from '@/components/Posts';
import Sidebar from '@/components/Sidebar';
export default function Home() {
  const displayName = 'Nguyen Pham';
  const description = '@npv2k1';
  const coverImg = 'img/background.png';
  const profileImg = 'img/avatar.jpg';
  return (
    <div className="flex flex-col">
      <Header
        displayName={displayName}
        coverImg={coverImg}
        profileImg={profileImg}
        description={description}
      />
      <div className="h-full bg-[#F0F2F5] pb-96">
        <div className="mx-auto flex max-w-6xl flex-col justify-center  space-x-2 md:flex-row">
          <Sidebar />
          <Posts />
        </div>
      </div>
    </div>
  );
}
