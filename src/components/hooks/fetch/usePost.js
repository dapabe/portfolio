import { useState } from "react";
import { sendEmail } from "@utils/common";

export default function usePost({ url, postResponse, inputValues = null }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [inputData, setInputData] = useState(inputValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch(url, {
      // method: "POST",
      // headers: {
      //   "Content-type": "application/json; charset=UTF-8",
      //   Accept: "application/json",
      // },
      // body: JSON.stringify(inputData),
    })
      .then(() => {
        setResponse(postResponse.ok);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.toString(), error);
        sendEmail(error.toString()).then(() => {
          setResponse(postResponse.error);
          setLoading(false);
        });
      });
  };

  return { response, isLoading, inputData, handleChange, formSubmit };
}
