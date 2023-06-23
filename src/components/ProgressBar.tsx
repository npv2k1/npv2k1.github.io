function ProgressBar({ name, level }: any) {
  return (
    <div>
      <p className="text-lg font-semibold text-gray-700">{name}</p>
      <div className="h-4 w-full rounded-full bg-gray-300">
        <div style={{ width: `${level}%` }} className="h-4 rounded-full bg-[#FFC200]"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
