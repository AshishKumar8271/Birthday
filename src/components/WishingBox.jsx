import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatMessages from "./ChatMessages";

const WishingBox = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://birthday-backend-ten.vercel.app/url/userData",
      );
      const data = response.data;
      setUserDetails(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserDataApi = async () => {
    try {
      await axios.post("https://birthday-backend-ten.vercel.app/url", {
        username,
        message,
      });
      setMessage("");
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnClick = () => {
    handleUserDataApi();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-8 py-4 w-full flex flex-col justify-center items-center md:px-2">
      <div className="w-full max-w-[500px] h-[600px] flex flex-col-reverse md:rounded-tl md:rounded-tr bg-gradient-to-br from-purple-400 to-blue-400 overflow-y-scroll shadow-lg border-2 border-black border-b-transparent p-2" style={{ overflowY: "scroll", scrollbarWidth: "thin" }}>
        {userDetails.map((data) => (
          <ChatMessages
            key={data._id}
            username={data?.username}
            greeting={data?.message}
            date={data?.createdAt}
          />
        ))}
      </div>
      <div className="w-full max-w-[500px] bg-gradient-to-br from-purple-400 to-blue-400 flex justify-between items-end py-3 border-2 border-black border-t-transparent px-1 rounded-b-md">
        <div className="space-y-2 flex-1">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2 placeholder-gray-400 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-2 placeholder-gray-400 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Send your greetings"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleOnClick}
          className="text-white bg-blue-600 focus:ring-4 font-medium rounded-md h-8 text-sm px-4 py-[5px] focus:outline-none  hover:bg-blue-700 "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default WishingBox;
