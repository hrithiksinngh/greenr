import statsStyle from '../stats/stats.module.scss';
import Icon from '../icon/icon';
import Title from '../title/title';
import Desc from '../desc/desc';

const Stats = props => {
  let { statsSvgId, statsTitle, statsDesc } = props;

  return (
    <div className={`flexColCenter`}>
      <div className={`flex items-center`}>
        {/* <Icon svgStyleClass={statsStyle.cardSocials} name={statsSvgId} /> */}
        <Title title={statsTitle} externalClass={`font-bold text-center`} />
      </div>
      <Desc
        desc={statsDesc}
        externalClass={`font-normal text-slate-500 text-center hiddenAnimation`}
      />
    </div>
  );
};

export default Stats;
