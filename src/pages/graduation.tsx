import React from 'react';

type Props = {};

const GraduationPage = (props: Props) => {
  const displayName = 'Lễ tốt nghiệp của Nguyên';
  const coverImg = 'img/background.png';
  const profileImg = 'img/avatar.jpg';
  return (
    <div className="mx-auto flex h-screen w-screen max-w-xl flex-col">
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
          <div className=" flex flex-col space-y-4">
            <h1 className="text-center text-6xl font-bold text-slate-700  ">{displayName}</h1>
          </div>
        </div>
      </div>
      <div>
        <code className="text-xl">
          {/* Lời mời */}
          <div className="rounded-xl  bg-white p-5">
            <h1 className="text-2xl font-bold text-gray-600">Lời mời</h1>
            <div className="mt-2">
              <p className="text-gray-700">
                Sắp tới mình sẽ tốt nghiệp, bạn hãy đến chung vui cùng mình nhé!
              </p>
            </div>
          </div>
        </code>
      </div>

      <div>
        <code>
          <div className="rounded-xl  bg-white p-5">
            <div className="mt-2 flex flex-row items-center space-x-3 border-b-2 border-slate-800 text-xl">
              <i className="fad fa-clock "></i>
              <a href="#" className="">
                <p className="text-gray-700 hover:text-blue-500">10h00 ngày 10/05/2024 (Thứ Sáu)</p>
              </a>
            </div>

            <div className="mt-2 flex flex-row items-center space-x-3 border-b-2 border-slate-800 text-xl">
              <i className="fad fa-map "></i>
              <a href="#" className="">
                <p className="text-gray-700 hover:text-blue-500">
                  Hội trường A2 - Học Viện Công Nghệ Bưu Chính Viễn Thông (Km 10, đường Nguyễn Trãi
                  - Hà Đông - Hà Nội).
                </p>
              </a>
            </div>
          </div>
        </code>
      </div>
    </div>
  );
};

export default GraduationPage;
