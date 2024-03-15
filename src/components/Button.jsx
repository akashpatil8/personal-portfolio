import "./button.scss";

export default function Button({ children, type = "solid" }) {
  if (type === "border")
    return <button className="button border--button">{children}</button>;

  return <button className="button solid--button">{children}</button>;
}
