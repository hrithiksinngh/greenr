import { useEffect, useRef, useState } from 'react';

const MarqueeNew = (props) => {
  const { imgSrcList } = props;
  const marqueeRef = useRef(null);
  const [shouldRotate, setShouldRotate] = useState(true);

  useEffect(() => {
    const checkRotation = () => {
      if (marqueeRef.current) {
        const containerWidth = marqueeRef.current.offsetWidth;
        const totalImagesWidth = imgSrcList.length * 120; // Assuming each image container is 120px wide

        if (totalImagesWidth <= containerWidth) {
          setShouldRotate(false);
        } else {
          setShouldRotate(true);
        }
      }
    };

    checkRotation();
    window.addEventListener('resize', checkRotation);

    return () => {
      window.removeEventListener('resize', checkRotation);
    };
  }, [imgSrcList]);

  return (
    <div className="mainMarquee" ref={marqueeRef}>
      <div className="wrapper">
        {shouldRotate ? (
          <>
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
          </>
        ) : (
          <div className="flex items-center ">
            {imgSrcList &&
              imgSrcList.map((imgSrc, i) => (
                <div key={i} className="w-[120px] m-6 ">
                  <img
                    key={`marquee-static-${i + 1}`}
                    className="w-[100%] my-auto"
                    alt={`marquee-static-${i + 1}`}
                    src={imgSrc}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarqueeNew;
