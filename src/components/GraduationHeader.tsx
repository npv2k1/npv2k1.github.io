import { css } from '@emotion/react';

function GraduationHeader({ coverImg, profileImg, displayName, description }: any) {
  return (
    <div className="flex justify-center">
      <div className="relative w-full flex-1 md:max-w-6xl">
        <img
          className="h-96 w-full rounded-b-lg  bg-opacity-20 bg-gradient-to-br object-cover "
          src={coverImg}
        />
        <div className=" -mt-48 flex items-center justify-center rounded  ">
          <div className="rounded-full bg-white p-3">
            <img className="h-52 w-52 rounded-full border object-cover" src={profileImg} alt="" />
          </div>
        </div>
        <div className=" flex flex-col space-y-4 border-b-2">
          <h1 className="text-semibold text-center text-6xl text-gray-700">{displayName}</h1>
        </div>
      </div>
    </div>
  );
}

export default GraduationHeader;
