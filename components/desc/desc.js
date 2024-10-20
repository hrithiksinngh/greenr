import ReactMarkdown from 'react-markdown';
import descStyle from '../desc/desc.module.scss';
import rehypeRaw from 'rehype-raw';

const Desc = props => {
  let { styleObj, externalClass } = props;
  return (
    <ReactMarkdown
      style={styleObj}
      className={`desc bg-inherit ${externalClass} ${descStyle.markdownStyle}`}
      children={props.desc}
      rehypePlugins={[rehypeRaw]}
    ></ReactMarkdown>
  );
};

export default Desc;
