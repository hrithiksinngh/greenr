const MarqueeNew = (props) => {
    let { imgSrcList } = props;
  
    return (
      <div className="mainMarquee ">
        <div className="wrapper">
          <div className="marquee flex items-center ">
            {imgSrcList &&
              imgSrcList.map((imgSrc, i) => (
                <div key={i} className="w-[120px] m-6 ">
                  <img
                    key={`marquee-1-${i + 1}`}
                    className="w-[100%] my-auto"
                    alt={`marquee-1-${i + 1}`}
                    src={imgSrc}
                  />
                </div>
              ))}
          </div>
          <div className="marquee2 flex items-center ">
            {imgSrcList &&
              imgSrcList.map((imgSrc, i) => (
                <div key={i} className="w-[120px] m-6 ">
                  <img
                    key={`marquee-2-${i + 1}`}
                    className="w-[100%] my-auto"
                    alt={`marquee-2-${i + 1}`}
                    src={imgSrc}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MarqueeNew;
  