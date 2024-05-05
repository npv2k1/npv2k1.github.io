import { css } from '@emotion/react';
import SocialLink from './SocialLink';

function Header({ profile }: any) {
  return (
    <div className="flex justify-center">
      <div className="relative w-full flex-1 md:max-w-6xl">
        <img
          className="h-96 w-full rounded-b-lg  bg-opacity-20 bg-gradient-to-br object-cover "
          src={profile.coverImg}
        />
        <div className=" -mt-48 flex items-center justify-center rounded  ">
          <div className="rounded-full bg-white p-3">
            <img className="h-52 w-52 rounded-full border object-cover" src={profile.profileImg} alt="" />
          </div>
        </div>
        <div className=" flex flex-col space-y-4 border-b-2 pb-5">
          <h1 className="text-semibold text-center text-6xl text-gray-700">{profile.fullName}</h1>
          <h2 className="text-center text-xl text-gray-500">{profile.userName}</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center space-x-2 py-2">
          {profile.socialLinks.map((socialLink: any) => (
            <SocialLink key={socialLink.href} {...socialLink} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
