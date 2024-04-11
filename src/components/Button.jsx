import "./button.scss";

export default function Button({
  children,
  type = "solid",
  btnType = "button",
}) {
  if (type === "border")
    return (
      <button className="button border--button" type={btnType}>
        {children}
      </button>
    );

  return (
    <button className="button solid--button" type={btnType}>
      {children}
    </button>
  );
}
