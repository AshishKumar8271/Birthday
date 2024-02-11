import ChatMessages from "./ChatMessages";

const WishingBox = () => {
  return (
    <div className="mt-8 py-4 w-full flex flex-col justify-center items-center md:px-2">
      <div className="w-full max-w-[500px] h-[600px] flex flex-col-reverse md:rounded-tl md:rounded-tr bg-gradient-to-br from-blue-400 to-green-400 overflow-y-scroll shadow-lg border-2 border-black border-b-transparent p-2">
        <ChatMessages />
      </div>
      <div className="w-full max-w-[500px] bg-gradient-to-br from-green-400 to-blue-400 flex justify-between items-end py-3 border-2 border-black border-t-transparent px-1 rounded-b-md">
        <div className="space-y-2 flex-1">
          <input
            type="text"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2 placeholder-gray-400 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
          <input
            type="text"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-2 placeholder-gray-400 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Send your greetings"
            required
          />
        </div>
        <button
          type="button"
          className="text-white bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-md h-8 text-sm px-4 py-[5px] focus:outline-none dark:bg-green-600 hover:bg-green-700 "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default WishingBox;
