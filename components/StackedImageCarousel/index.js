const StackedImage = (props) => {
    const {img} = props
    return (
      <div className="relative w-[80vw] h-[53vw] max-w-[20rem] max-h-[13rem] sm:w-96 sm:h-64">
        {/* Base Image */}
        <div className="absolute inset-0 transform translate-x-[3%] sm:translate-x-6 -translate-y-[3%] sm:-translate-y-6 z-0 blur-[1px] opacity-60">
          <img
            src={img}
            alt="Blurred Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
  
        {/* Middle Image */}
        <div className="absolute inset-0 transform translate-x-[1.5%] sm:translate-x-3 -translate-y-[1.5%] sm:-translate-y-3 z-10 opacity-80">
          <img
            src={img}
            alt="Middle Image"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
  
        {/* Top Image */}
        <div className="absolute inset-0 z-20">
          <img
            src={img}
            alt="Top Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  };
  
  export default StackedImage;
