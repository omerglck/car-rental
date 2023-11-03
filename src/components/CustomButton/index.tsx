import { ButtonProps } from "../../types";
const CustomButton = ({
  title,
  designs,
  handleClick,
  btnType,
  disabled,
  rIcon,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={btnType || "button"}
      className={`custom-btn bg-primary-blue rounded-full transition hover:bg-blue-800 text-white ${designs}`}
      onClick={handleClick}
    >
      <span className="flex-1"> {title}</span>
      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} alt="right-arraw" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
