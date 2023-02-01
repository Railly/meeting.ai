export const Message = () => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-col">
        <div className=" flex flex-row items-end">
          <img
            className="flex items-center justify-center h-8 w-8 rounded-full"
            src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg"
            alt="Bot"
          />
          <div className="ml-3">
            <p className="mb-1 text-gray-500 text-xs">
              <span className="font-semibold text-gray-900">Ángel Comizzo</span>
              , 2:53 PM
            </p>
            <div
              className="bg-white px-4 py-2 rounded-xl shadow text-sm
                break-words max-w-xs"
            >
              <p>JUntos por la 27, la 27, la 27, la 27</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
