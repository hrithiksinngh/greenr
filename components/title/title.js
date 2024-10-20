import titleStyle from "../title/title.module.scss";

const Title = (props) => {
  //   let isItallic = props.isItallic;
  //   let styleObj = props.styleObj;
  //   let externalClass = props.externalClass;
  let { styleObj, isItallic, externalClass } = props;

  return (
    <p
      style={styleObj}
      className={`f32 ${titleStyle.mainTitle} ${externalClass}`}
    >
      {props.title}
    </p>
  );
};

export default Title;
