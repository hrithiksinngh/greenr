import Icons from '../../assets/svgs/icons.svg';

function Icon(props) {
  let {
    width,
    height,
    color,
    name,
    svgStyleClass,
    externalDivClass = '',
  } = props;
  return (
    <svg
      className={`${svgStyleClass} ${externalDivClass}`}
      width={width}
      height={height}
      fill={color}
    >
      <use href={Icons.src + `#${name}`} />
    </svg>
  );
}

export default Icon;
