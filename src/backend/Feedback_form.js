const ENV = import.meta.env;

const FORM_ENDPOINT = `${ENV.VITE_ENDPOINT_URL}`;

export const initialFormValues = Object.seal({
  email: "",
  message: "",
});
export const serviceMessage = Object.seal({
  class: "",
  text: "",
});

export async function formSubmission(serviceResponse, POST_OBJ) {
  try {
    // throw new Error();
    await fetch(FORM_ENDPOINT, {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify(POST_OBJ),
    });
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
