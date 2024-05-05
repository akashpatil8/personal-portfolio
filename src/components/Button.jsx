import "./button.scss";

export default function Button({
  children,
  type = "solid",
  btnType = "button",
  onClick,
}) {
  if (type === "border")
    return (
      <button
        className="button border--button"
        onClick={onClick}
        type={btnType}
      >
        {children}
      </button>
    );

  return (
    <button className="button solid--button" onClick={onClick} type={btnType}>
      {children}
    </button>
  );
}
