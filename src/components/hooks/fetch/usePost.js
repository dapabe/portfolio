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
  //  copy of previous prop values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  //  Might refactor using 1 service instead of 2.
  //  Limited amount of messages for these services.
  const formSubmit = async (e) => {
    e.preventDefault();
    handleLoad(); // true

    try {
      try {
        checkInputs();
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json",
          },
          body: JSON.stringify(inputData),
        })
          .then(() => {
            setResponse(postResponses.ok);
            handleLoad();
          })
          .catch((error) => {
            throw error;
          });
      } catch (error) {
        sendEmail(e.target).then(
          () => {
            setResponse(postResponses.ok);
            handleLoad();
          },
          (error) => {
            throw error;
          }
        );
      }
    } catch (error) {
      sendEmail(error).then(
        () => {
          setResponse(postResponses.error);
          handleLoad();
        },
        () => {
          postResponses.error.text =
            "Ha ocurrido un error fatal, trabajaré en ello.";
          setResponse(postResponses.error);
          handleLoad();
        }
      );
    }
  };
  function checkInputs() {
    const { user_email, message } = inputData;
    user_email.trim();

    if (isEmpty(user_email)) {
      postResponses.error.text = "Por favor, rellena los campos vacíos.";
      handleLoad();
      throw new Error("Email validation 1");
    } else if (!isEmail(user_email)) {
      postResponses.error.text = "Ingresa un correo válido.";
      handleLoad();
      throw Error("Email validation 2");
    }

    if (isEmpty(message)) {
      postResponses.error.text = "Por favor, rellena los campos vacíos.";
      handleLoad();
      throw new Error("Message validation 1");
    }
  }

  return { response, isLoading, inputData, handleChange, formSubmit };
}
