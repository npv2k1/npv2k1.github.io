import Header from '@/components/Header';
import Posts from '@/components/Posts';
import Sidebar from '@/components/Sidebar';
import { profile } from '@/mocks';
export default function Home() {
  
  return (
    <div className="flex flex-col">
      <Header profile={profile}
      />

      <div className="h-full bg-[#F0F2F5] pb-96">
        <div className="mx-auto flex max-w-6xl flex-col justify-center space-x-2 md:flex-row">
          <Sidebar />
          <Posts />
        </div>
      </div>
    </div>
  );
}
