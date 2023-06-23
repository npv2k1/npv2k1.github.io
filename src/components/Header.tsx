function Header({ coverImg, profileImg, displayName, description }) {
  return (
    <div className="flex justify-center">
      <div className="w-full relative md:max-w-6xl flex-1">
        <img
          className="h-96 w-full object-cover rounded-b-lg"
          src={coverImg}
          alt=""
        />
        <div className="-mt-48 flex items-center justify-center">
          <div className="bg-white rounded-full p-3">
            <img
              className="rounded-full w-52 h-52 border object-cover"
              src={profileImg}
              alt=""
            />
          </div>
        </div>
        <div className=" flex flex-col space-y-4 border-b-2">
          <h1 className="text-6xl text-semibold text-center text-gray-700">
            {displayName}
          </h1>
          <h2 className="text-xl text-gray-500 text-center">{description}</h2>
        </div>

        <div className="flex-wrap flex space-x-2 items-center justify-center">
          <div className="p-5 rounded-lg hover:bg-gray-200 border-blue-500 items-center">
            <a href="https://github.com/npv2k1" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="p-5 rounded-lg hover:bg-gray-200 border-blue-500 items-center">
            <a href="https://www.linkedin.com/in/npv2k1/" target="_blank">
              <i className="fab fa-linkedin fa-2x text-[#0A66C2]"></i>
            </a>
          </div>
          <div className="p-5 rounded-lg hover:bg-gray-200 border-blue-500 items-center">
            <a href="https://twitter.com/npv2k1" target="_blank">
              <i className="fab fa-twitter-square  fa-2x text-[#1DA1F2]"></i>
            </a>
          </div>
          <div className="p-5 rounded-lg hover:bg-gray-200 border-blue-500 items-center">
            <a href="https://www.facebook.com/pvnpvnpvn/" target="_blank">
              <i className="fab fa-facebook-square fa-2x text-[#0F90F2]"></i>
            </a>
          </div>
          <div className="p-5 rounded-lg hover:bg-gray-200 border-blue-500 items-center">
            <a href="https://2k1.org" target="_blank">
              <i className="fab fa-wordpress fa-2x text-[#464646]"></i>
            </a>
          </div>
          <div className="p-5 rounded-lg hover:bg-gray-200 border-blue-500 items-center">
            <a
              href="https://www.youtube.com/channel/UCXsIcA5FfZIOZUOpFRrTcHA"
              target="_blank"
            >
              <i className="fab fa-youtube fa-2x text-[#FF0000]"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
