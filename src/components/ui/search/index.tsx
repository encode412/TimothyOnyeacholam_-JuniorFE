import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../../features/filterSlice";

const Select = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategory, setShowCategory] = useState("Search for a Capsule by");
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [hideInput, setHideInput] = useState(false);
  const dispatch = useDispatch();

  const handleSelect = () => {
    setShowDropdown(!showDropdown);
    setHideInput(true);
  };
  const categories = [
    {
      id: 0,
      category: "Status",
      value: "status",
    },
    {
      id: 1,
      category: "Original launch",
      value: "original_launch",
    },
    {
      id: 2,
      category: "Type",
      value: "type",
    },
  ];
  useEffect(() => {
    dispatch(filter({ selectedCategory, input }));
  }, [selectedCategory, input]);

  return (
    <div className="relative">
      <h3
        className="md:absolute  static md:left-[6rem] md:bottom-[-4.5rem] lg:left-[30rem] lg:bottom-[5rem] bg-primary animate-slide_up  w-[382px] md:w-[550px] lg:w-[650px]  text-black font-medium text-sm  md:text-base flex items-center justify-between py-6 px-8 md:px-10 cursor-pointer rounded-[10px]"
        onClick={handleSelect}
      >
        {showCategory}
        <img
          src={"/home/dropdown.png"}
          className={`transition-all ease-in ${showDropdown && "rotate-180"}`}
          alt=""
        />
      </h3>

      {showDropdown && (
        <div className="md:absolute static w-full z-20 lg:top-[-5.5rem] md:top-[4rem] md:left-[6rem] lg:left-[30rem] md:w-[550px] lg:w-[650px] flex items-start bg-primary shadow-xl text-black font-medium text-base rounded-[10px] mt-4 py-2 gap-2 md:gap-0 lg:gap-5 overflow-y-auto px-6 flex-col animate-slide_up">
          {categories.map((category) => (
            <span key={category.id}>
              <span
                
                className="hover:cursor-pointer p-[5px] lg:p-[10px]"
                onClick={() => {
                  setSelectedCategory(category.value);
                  setShowCategory(category.category);
                  setShowDropdown(false);
                }}
              >
                {category.category}
              </span>
            </span>
          ))}
        </div>
      )}
      {!showDropdown && hideInput && (
        <div>
          <input
            type="text"
            placeholder={`Search by ${showCategory}`}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="absolute lg:bottom-[-2rem] md:bottom-[-10rem] md:left-[6rem] lg:left-[30rem] bg-primary animate-slide_up outline-0  w-full md:w-[550px] lg:w-[650px]  text-black font-medium  text-base flex items-center justify-between py-4 md:py-6 px-10 cursor-pointer rounded-[10px]"
          />
        </div>
      )}
    </div>
  );
};

export default Select;
