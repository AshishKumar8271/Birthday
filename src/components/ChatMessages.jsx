import { useEffect } from "react";

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
    const lastNameInitial =
      nameParts.length > 1 ? nameParts[nameParts.length - 1][0] : "";
    return firstNameInitial + lastNameInitial;
  };

  const getOwnerName = (ownerName) => {
    const [firstName] = ownerName.split(" ");
    return firstName.toLowerCase();
  };

  return getOwnerName(username) !== "sachin" ? (
    <div className="mt-2 flex gap-2 bg-blue-50 p-2 rounded-lg shadow-md">
      <div className="h-6 w-6 bg-blue-500 text-white rounded-full flex justify-center items-center text-[11px] font-bold">
        {getInitialLettersOfName(username).toUpperCase()}
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-blue-900">
            {username.charAt(0).toUpperCase() + username.slice(1)}
          </span>
          <span className="text-xs font-medium text-gray-600 ml-2">
            {formattedDate}
          </span>
        </div>

        <span className="block text-sm text-blue-800 mt-1">{greeting}</span>
      </div>
    </div>
  ) : (
    <div className="mt-2 flex flex-row-reverse gap-2 bg-white p-2 rounded-lg shadow-md">
      <div className="h-6 w-6 bg-blue-500 text-white rounded-full flex justify-center items-center text-[11px] font-bold">
        {getInitialLettersOfName(username).toUpperCase()}
      </div>
      <div className="w-full">
        <div className="flex flex-row-reverse items-center">
          <span className="text-sm font-semibold text-blue-900">
            {username.charAt(0).toUpperCase() + username.slice(1)}
          </span>
          <span className="text-xs mr-2 font-medium text-gray-600 ml-2">
            {formattedDate}
          </span>
        </div>
        <span className="block text-end text-sm text-blue-800 mt-1">
          {greeting}
        </span>
      </div>
    </div>
  );
};

export default ChatMessages;
