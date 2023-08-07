import GoBack from "./GoBack";

const Button = ({
  text = "Button",
  bgColor = "bg-[#AD1FEA] hover:bg-[#C75AF6]",
  component,
}) => {
  return (
    <button
      className={`p-[0.7rem_1.5rem] rounded-[0.625rem] ${bgColor} transition`}
    >
      {component ? (
        <GoBack color="text-[#CDD2EE]" />
      ) : (
        <span
          className={`text-[#F2F4FE] font-bold text-sm not-italic leading-normal`}
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default Button;
