import { useContext } from "react";
import { LightMode } from "../../components/Context/Context";

const SearchIcon = () => {
  const { lightDark } = useContext(LightMode);
  return (
    <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.2928 26.7071C22.6833 27.0976 23.3165 27.0976 23.707 26.7071C24.0975 26.3166 24.0975 25.6834 23.707 25.2929L22.2928 26.7071ZM14.1847 18.5991L22.2928 26.7071L23.707 25.2929L15.599 17.1849L14.1847 18.5991Z"
        fill={lightDark ? "black" : "white"}
      />
      <circle cx="9" cy="12" r="8" stroke={lightDark ? "black" : "white"} strokeWidth="2" />
    </svg>
  );
};

export default SearchIcon;
