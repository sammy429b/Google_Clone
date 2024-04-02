import { Link } from "react-router-dom";



const HeaderOption = ({ Icon, title, selected, link }) => {
  return (
    <Link
      to={link}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </Link>
  );
};

export default HeaderOption;