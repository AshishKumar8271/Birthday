

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

  const getInitialLettersOfName = (name) => {
    const nameParts = name.split(" ");
    const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
    return firstNameInitial;
  };

  return (
    <div className="mt-2 flex gap-2 bg-blue-100 p-2 rounded-lg shadow-md">
      <div className="h-6 w-6 bg-blue-500 text-white rounded-full flex justify-center items-center text-[11px] font-bold">
        {getInitialLettersOfName(username).toUpperCase()}
      </div>
      <div className="w-full">
        <div className="flex items-center border-b-2 pb-2">
          <span className="text-sm font-semibold">
            {username.charAt(0).toUpperCase() + username.slice(1)}
          </span>
          <span className="text-xs font-medium text-gray-600 ml-2">
            {formattedDate}
          </span>
        </div>

        <span className="block text-sm my-1 text-gray-600 font-courg">{greeting}</span>
      </div>
    </div>
  );
};

export default ChatMessages;
