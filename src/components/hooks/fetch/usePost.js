import { useState } from "react";
import { sendEmail } from "@utils/common";

export default function usePost({ url, postResponse, inputValues = null }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [inputData, setInputData] = useState(inputValues);

  //  Computed properties overwriting a
  //  copy of previous prop values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  //  Might refactor using 1 service instead of 2.
  //  Limited amount of messages for these services.
  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then(() => {
        setResponse(postResponse.ok);
        setLoading(false);
      })
      .catch(() => {
        sendEmail(e.target).then(() => {
          setResponse(postResponse.error);
          setLoading(false);
        });
      });
  };

  return { response, isLoading, inputData, handleChange, formSubmit };
}
