function ProgressBar({ name, level }) {
  return (
    <div>
      <p className="text-lg font-semibold text-gray-700">{name}</p>
      <div className="w-full bg-gray-300 h-4 rounded-full">
        <div
          style={{ width: `${level}%` }}
          className="bg-[#FFC200] h-4 rounded-full"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
