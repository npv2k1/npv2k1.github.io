function Sidebar() {
  return (
    <div
      style={{ height: 'fit-content ' }}
      className="top-0 mt-5 flex w-full flex-1 flex-col space-y-4 md:sticky md:max-w-md"
    >
      <div className="rounded-xl  bg-white p-5">
        <h1 className="text-2xl font-bold text-gray-600">About Me</h1>
        <div className="mt-2">
          <p className="text-gray-700">
            Hello! I'm Nguyen, I'm 23 years old, and I love to code. I'm pursuing a career as a
            software developer. I aim to develop software that makes life smarter and easier. I also
            enjoy science, physics, and electronics.
          </p>
        </div>
      </div>

      <div className="rounded-xl  bg-white p-5">
        <h1 className="text-2xl font-bold text-gray-600">Education</h1>
        <div className="font-xl mt-2 flex flex-row items-center space-x-3">
          <i className="fad fa-graduation-cap fa"></i>
          <p className="text-gray-700">
            Student at Posts and Telecommunications Institute of Technology
          </p>
        </div>
      </div>
      <div className="rounded-xl  bg-white p-5">
        <h1 className="text-2xl font-bold text-gray-600">Skills</h1>
        <div className="mt-2">
          <div className="flex flex-wrap items-center space-x-3 space-y-1">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.python.org" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                width="40"
                height="40"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="40"
                height="40"
              />
            </a>
            <a href="https://nodejs.org" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.w3.org/html/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
              />
            </a>
            <a href="https://expressjs.com" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width="40"
                height="40"
              />
            </a>
            <a href="https://nextjs.org/" target="_blank">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-3.svg"
                alt="nextjs"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.electronjs.org" target="_blank">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"
                alt="electron"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-xl  bg-white p-5">
        <h1 className="text-2xl font-bold text-gray-600">Tools</h1>
        <div className="mt-2 flex flex-wrap items-center space-x-3">
          <a href="https://www.docker.com/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
              alt="docker"
              width="40"
              height="40"
            />
          </a>

          <a href="https://git-scm.com/" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />
          </a>
          <a href="https://heroku.com" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="heroku"
              width="40"
              height="40"
            />
          </a>

          <a href="https://www.linux.org/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="linux"
              width="40"
              height="40"
            />
          </a>

          <a href="https://postman.com" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width="40"
              height="40"
            />
          </a>
        </div>
      </div>

      <div className="rounded-xl  bg-white p-5">
        <h1 className="text-2xl font-bold text-gray-600">Contact</h1>
        <div className="font-xl mt-2 flex flex-row items-center space-x-3">
          <i className="fad fa-envelope "></i>
          <a href="mailto:npv2k1@gmail.com" className="">
            <p className="text-gray-700 hover:text-blue-500">npv2k1@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
