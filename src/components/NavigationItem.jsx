const NavigationItem = ({ onClick, href, children }) => {
  return (
    <a
      onClick={onClick}
      href={href}
      className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-green-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
    >
      {children}
    </a>
  );
};

export default NavigationItem;
