import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, onValidated }) => {
  const [email, setEmail] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const submit = () => {
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
    if (status === "success") {
      setShowComponent(true);
    }
  };

  useEffect(() => {
    if (showComponent) {
      setShowComponent(true);
      const toRef = setTimeout(() => {
        setShowComponent(false);
        setEmail(" ");
        clearTimeout(toRef);
      }, 4000);
    }
  }, [showComponent]);

  return (
    <div>
      {status === "error" && (
        <div className="text-red">Please Enter Valid Email</div>
      )}

      <div className="w-[80%] flex">
        <input
          type="email"
          value={email}
          placeholder="Enter your mail id here"
          className="border-none outline-none focus:border-transparent focus:ring-0 flex-1 rounded-l text-black placeholder:opacity-50 text-sm"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="subscribeBtn px-4 lg:px-10 py-2 rounded-r text-sm"
          onClick={submit}
        >
          {status === "sending" ? (
            <div className="">sending...</div>
          ) : showComponent === true ? (
            "Success"
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
    </div>
  );
};
const EmailInput = (props) => {
  const url =
    "https://getgreenr.us11.list-manage.com/subscribe/post?u=7cd6365222e2b9ca840ebd9e0&id=7b0c8677cb";

  return (
    <div className="">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status }) => (
          <CustomForm
            status={status}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default EmailInput;
