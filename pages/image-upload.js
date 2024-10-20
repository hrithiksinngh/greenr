import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineCopy } from "react-icons/ai";
const ImageUpload = () => {
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [data, setData] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("partnerLogo", file);
    axios
      .post("https://server2.getgreenr.org/api/image-upload", formData)
      .then((res) => {
        setShowComponent(true);
        setData(true);
        setName(res.data.filename);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (showComponent) {
      setShowComponent(true);
      const toRef = setTimeout(() => {
        setShowComponent(false);
        setFile();
        clearTimeout(toRef);
      }, 4000);
    }
  }, [showComponent]);
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="py-48 px-48 justify-center text-center">
        {file ? (
          <div className="flex justify-center pb-6">
            <img src={URL.createObjectURL(file)} alt="Thumb" />{" "}
          </div>
        ) : null}

        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <div>
          <button
            onClick={handleSubmit}
            className="infoBtn mt30 text-white font-semibold py-2 px-32 rounded hover:scale-105 rounded  large"
          >
            {loading === true ? "Uploading ........." : "Upload"}
          </button>
        </div>
        <div className="pt-10"></div>

        <hr />
        {data === true ? (
          <div className="pt-10">
            <div className="text-xl font-bold">Link of Uploaded Image</div>

            <div className="w-full flex flex-row justify-center  p-2 m-1  rounded-lg">
              <div className="p-3 px-8 bg-white">{`https://server2.getgreenr.org/images/${name}`}</div>
              <div className="p-3 px-8 bg-white  flex flex-row space-x-2 ease-linear duration-150">
                {show ? (
                  <div className={"text-neutral-900 font-Poppins font-bold"}>
                    Copied!
                  </div>
                ) : (
                  <div className={"text-neutral-900 font-Poppins font-bold"}>
                    Copy
                  </div>
                )}
                <AiOutlineCopy
                  size={20}
                  className="cursor-pointer mt-1"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://server2.getgreenr.org/images/${name}`
                    );
                    setShow(true);
                    setTimeout(() => {
                      setShow(false);
                    }, 5000);
                  }}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImageUpload;
