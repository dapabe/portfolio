import { useState } from "react";

//  Takes a mandatory object as a parameter.

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({});

  //  Name and value are in brackets due to being
  //  computed properties.
  //  setValues is overwriting existing properties
  //  and setting the new ones from the same KEY prop.

  const handleChange = (event) => {
    const [name, value] = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, handleChange };
}
