const ChatMessages = ({ username, greeting, date }) => {
  date = new Date(date);

  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = date.toLocaleString("en-US", options);

  return (
    <div className="mt-2 flex gap-2 bg-blue-50 p-2 rounded-lg shadow-md">
      <div className="h-6 w-6 mt-1 bg-blue-500 text-white rounded-full flex justify-center items-center text-[11px] font-bold">
        SK
      </div>
      <div className="w-full">
        <span className="text-sm font-semibold text-blue-900">{username}</span>
        <span className="text-sm font-medium text-gray-600 ml-2">
          {formattedDate}
        </span>
        <span className="block text-sm text-blue-800 mt-1">{greeting}</span>
      </div>
    </div>
  );
};

export default ChatMessages;
