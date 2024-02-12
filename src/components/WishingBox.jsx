import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatMessages from "./ChatMessages";

const WishingBox = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

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
      setIsError(false);
      fetchData();
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        setErrorMessage(error.response.data.error);
        setIsError(true);
      }
    }
  };

  const handleOnClick = () => {
    handleUserDataApi();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-8 pt-3 max-w-[500px] md:px-2 shadow-xl rounded-3xl mb-5 mx-4">
      <h1 className="text-center text-3xl mb-1 font-sans font-bold font-courg">
        Wishing Box
      </h1>
      <div
        className="w-full p-2 h-[300px] flex flex-col-reverse md:rounded-tl md:rounded-tr "
        style={{ overflowY: "scroll", scrollbarWidth: "none" }}
      >
        {userDetails.map((data) => (
          <ChatMessages
            key={data._id}
            username={data?.username}
            greeting={data?.message}
            date={data?.createdAt}
          />
        ))}
      </div>
      <div className="w-full max-w-[500px] flex justify-between items-end py-3 px-2">
        <div className="space-y-2 flex-1">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-[80%] p-2 focus:outline-none"
            placeholder="Enter your name"
            required
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-[95%] p-2 placeholder-gray-400 focus:outline-none "
            placeholder="Send your greetings"
            required
          />
          {isError ? (
            <p className="text-sm text-red-700 ml-1">{errorMessage}</p>
          ) : (
            ""
          )}
        </div>
        <button
          type="button"
          onClick={handleOnClick}
          className="text-white bg-blue-600 focus:ring-4 font-medium rounded-md h-8 text-sm px-4 py-[5px] focus:outline-none  hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default WishingBox;
