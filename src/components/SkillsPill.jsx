import "./skillspill.scss";

const imgPath = "../../../../public/assets/";
export default function SkillsPill({
  skillIcon,
  skill,
  pillSide = "left",
  dotPosition = "center",
}) {
  return (
    <div className={`skills-pill-container dot-${dotPosition}`}>
      {pillSide === "left" ? (
        <>
          <div className="skills--pill">
            <img src={`${imgPath}${skillIcon}.png`} alt="" />
            <span>{skill}</span>
          </div>
          <div className="dot"></div>
        </>
      ) : (
        <>
          <div className="dot"></div>
          <div className="skills--pill">
            <img src={`${imgPath}${skillIcon}.png`} alt="" />
            React
          </div>
        </>
      )}
    </div>
  );
}
