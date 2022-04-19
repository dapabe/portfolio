import { useEffect, useState } from "react";

//                                                          Optional
export default async function useFetch({
  POST = false,
  url,
  postResponse,
  initialValues,
}) {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [inputData, setInputData] = useState(initialValues);

  //  [NOTE]  Using Computing Properties
  //          to overwrite previous data
  //          from the state.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      // throw Error("Error");
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify(inputData),
      });
      setResponse(postResponse.ok); //  Needs testing
      setLoading(false);
    } catch (error) {
      setResponse(error);
      setLoading(false);
    }
  };

  useEffect(async () => {
    setLoading(true);

    //  fetchs defaults to GET, POST = false = GET
    if (!POST) {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setResponse(data);
          setLoading(false);
        })
        .catch((error) => {
          setResponse(error);
          setLoading(false);
        });
    } else formSubmit();

    return () => setResponse(null), setLoading(false);
  }, []);

  //GET/POST.response           POST       onChange      onSubmit
  return { response, isLoading, inputData, handleChange, formSubmit };
}
