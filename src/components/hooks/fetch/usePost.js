import { useState } from "react";
import useToggle from "@hooks/useToggle";
import { sendEmail, isEmpty, isEmail } from "@utils/reusable";

export default function usePost({
  url,
  postResponses = null,
  inputValues = null,
}) {
  const [response, setResponse] = useState(null);
  const [isLoading, handleLoad] = useToggle(false);
  const [inputData, setInputData] = useState(inputValues);

  //  Computed properties overwriting a
  //  copy of previous form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  function checkInputs() {
    const { user_email, message } = inputData;
    user_email.trim();

    if (isEmpty(user_email)) {
      postResponses.error.text = "Por favor, rellena el campo de email.";
      throw Error("email1");
    } else if (!isEmail(user_email)) {
      postResponses.error.text = "Ingresa un correo válido.";
      throw Error("email2");
    }

    if (isEmpty(message)) {
      postResponses.error.text = "Por favor, rellena el campo vacio.";
      throw Error("msg1");
    }
  }

  //  Might refactor using 1 service instead of 2.
  //  Limited amount of messages for these services.

  //  [HowWorks]  Check for valid user inputs then fetch
  //              if the fetch "ok" prop is false then
  //              use the 2nd service, else show an error.
  const formSubmit = async (e) => {
    e.preventDefault();
    handleLoad(); // true

    try {
      try {
        checkInputs();
        await fetch("url", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json",
          },
          body: JSON.stringify(inputData),
        }).then(
          (res) => {
            if (res.ok) {
              setResponse(postResponses.ok);
              handleLoad();
            } else {
              throw new Error();
            }
          },
          (error) => {
            throw error;
          }
        );
      } catch (error) {
        if (errorSwitch(error.message)) {
          throw error;
        } else {
          await sendEmail(e.target).then(
            () => {
              setResponse(postResponses.ok);
              handleLoad();
            },
            (error) => {
              throw error;
            }
          );
        }
      }
    } catch (error) {
      setResponse(postResponses.error);
      handleLoad();
    }
  };

  return { response, isLoading, inputData, handleChange, formSubmit };
}

const errorSwitch = (str) => ["email1", "email2", "msg1"].includes(str);
