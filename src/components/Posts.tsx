

function Posts() {
  return (
    <div className="flex-1 mt-5 space-y-5 p-2">
      <div className="rounded-lg bg-white p-5 ">
        <h1 className="font-bold text-xl text-gray-600">My blog 2k1.org</h1>
        <div className="mt-2 ">
          <div className="mt-2  flex space-x-1  space-y-1   items-center">
            <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
              Wordpress
            </p>
            <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
              CSS
            </p>
          </div>
        </div>
        <img
          className="mt-5 w-full h-96 object-cover rounded-lg hover:bg-blue-100 transform duration-100 hover:scale-105 cursor-pointer"
          src="/projects/2k1.org.png"
          alt=""
        />
      </div>
      <div className="rounded-lg bg-white p-5  ">
        <h1 className="font-bold text-xl text-gray-600">Amazone Clone</h1>
        <div className="mt-2 flex flex-wrap space-x-1  space-y-1   items-center">
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            NextJs
          </p>
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            Firebase
          </p>
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            Stripe
          </p>
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            TailwindCSS
          </p>
        </div>
        <img
          className="mt-5 w-full h-96 object-cover rounded-lg hover:bg-blue-100 transform duration-100 hover:scale-105 cursor-pointer"
          src="/projects/amazone.png"
          alt=""
        />
      </div>
      <div className="rounded-lg bg-white p-5  ">
        <h1 className="font-bold text-xl text-gray-600">Facebook clone</h1>
        <div className="mt-2  flex   flex-wrap space-x-1  space-y-1   items-center">
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            NextJs
          </p>
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            Firebase
          </p>
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            Facebook auth
          </p>
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            TailwindCSS
          </p>
        </div>
        <img
          className="mt-5 w-full h-96 object-cover rounded-lg hover:bg-blue-100 transform duration-100 hover:scale-105 cursor-pointer"
          src="/projects/fbclone.png"
          alt=""
        />
      </div>
      <div className="rounded-lg bg-white p-5  ">
        <h1 className="font-bold text-xl text-gray-600">Messenger clone</h1>
        <div className="mt-2 flex  flex-wrap space-x-1 space-y-1 items-center">
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            NextJs
          </p>
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            Express
          </p>
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            SocketIO
          </p>
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            Firebase
          </p>
          <p className="px-2 rounded-full bg-yellow-300 text-gray-800 w-max font-semibold">
            TailwindCSS
          </p>
        </div>
        <img
          className="mt-5 w-full h-96 object-cover rounded-lg hover:bg-blue-100 transform duration-100 hover:scale-105 cursor-pointer"
          src="/projects/messenger.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Posts;
