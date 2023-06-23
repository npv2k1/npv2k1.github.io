import { css } from '@emotion/react';

function Header({ coverImg, profileImg, displayName, description }: any) {
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
          <h2 className="text-center text-xl text-gray-500">{description}</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center space-x-2">
          <div className="items-center rounded-lg border-blue-500 p-5 hover:bg-gray-200">
            <a href="https://github.com/npv2k1" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="items-center rounded-lg border-blue-500 p-5 hover:bg-gray-200">
            <a href="https://www.linkedin.com/in/npv2k1/" target="_blank">
              <i className="fab fa-linkedin fa-2x text-[#0A66C2]"></i>
            </a>
          </div>
          <div className="items-center rounded-lg border-blue-500 p-5 hover:bg-gray-200">
            <a href="https://twitter.com/npv2k1" target="_blank">
              <i className="fab fa-twitter-square  fa-2x text-[#1DA1F2]"></i>
            </a>
          </div>
          <div className="items-center rounded-lg border-blue-500 p-5 hover:bg-gray-200">
            <a href="https://www.facebook.com/pvnpvnpvn/" target="_blank">
              <i className="fab fa-facebook-square fa-2x text-[#0F90F2]"></i>
            </a>
          </div>
          <div className="items-center rounded-lg border-blue-500 p-5 hover:bg-gray-200">
            <a href="https://2k1.org" target="_blank">
              <i className="fab fa-wordpress fa-2x text-[#464646]"></i>
            </a>
          </div>
          <div className="items-center rounded-lg border-blue-500 p-5 hover:bg-gray-200">
            <a href="https://www.youtube.com/channel/UCXsIcA5FfZIOZUOpFRrTcHA" target="_blank">
              <i className="fab fa-youtube fa-2x text-[#FF0000]"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
