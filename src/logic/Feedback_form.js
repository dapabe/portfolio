const Formspark_FORM_ID = import.meta.env.VITE_FORMSPARK_FORM_ID;
const FORM_ENDPOINT = `https://submit-form.com/${Formspark_FORM_ID}`;

export const initialFormValues = Object.seal({
  email: "",
  message: "",
});
export const serviceMessage = Object.seal({
  class: "",
  text: "",
});

export async function formSubmission(serviceResponse, POST_OBJ) {
  console.log(POST_OBJ);
  try {
    // const result = await fetch(FORM_ENDPOINT, {
    //   method: "POST",
    //   // mode: "no-cors",
    //   body: JSON.stringify(POST_OBJ),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //     "Access-Control-Allow-Origin": "https://formspark.io",
    //   },
    // });
    // throw new Error("Forzado");

    serviceResponse({
      class:
        "absolute inset-0 text-black bg-white flex justify-center items-center font-bold text-lg",
      text: "¡Gracias, leeré tu mensaje lo antes posible!",
    });
  } catch (error) {
    serviceResponse({
      class: "text-red-600 font-semibold inline max-w-[50%] text-sm",
      text: "Ha habido un error, por favor intentalo de nuevo.",
    });
  }
}
