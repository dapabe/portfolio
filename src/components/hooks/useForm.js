import { useState } from "react";

//  Takes a mandatory object as a parameter.

export default function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  //  REFACTOR

  //  Name and value are in brackets due to being
  //  computed properties.
  //  setValues is overwriting existing properties
  //  and setting the new ones from the same KEY prop.

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return { formData, handleChange };
}
