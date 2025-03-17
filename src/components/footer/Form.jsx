const Form = () => {
  return (
    <div action="#" className="flex flex-col justify-between">
      <form
        action="
    #"
        className="flex space-x-3"
      >
        <input
          type="text"
          className="bg-white flex-1 px-4 rounded-full focus:outline-none"
          placeholder="Updates in your inbox"
        />
        <button className="dark-btn px-6 py-2 text-white rounded-full bg-Bright-Red hover:bg-Bright-Red-Sup-Light focus:outline-none">
          Go
        </button>
      </form>
      <p className="hidden text-white md:block">
        Copyright &copy; 2025, All Rights Reserved.
      </p>
    </div>
  );
};

export default Form;
