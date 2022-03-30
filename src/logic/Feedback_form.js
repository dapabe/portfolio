const Formspark_FORM_ID = import.meta.env.VITE_FORMSPARK_FORM_ID;
const Formspark_URL = `https://submit-form.com/${Formspark_FORM_ID}`;

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
    // const result = await fetch(Formspark_URL, {
    //   method: "POST",
    //   // mode: "no-cors",
    //   body: JSON.stringify(POST_OBJ),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //     "Access-Control-Allow-Origin": "https://formspark.io",
    //   },
    // });
    // throw new Error("Forzado");
    setTimeout(() => {
      serviceResponse({
        text: "¡Gracias, leeré tu mensaje lo antes posible!",
      });
    }, 3000);
  } catch (error) {
    serviceResponse({
      class: "text-red-600 font-semibold inline",
      text: "Ha habido un error, por favor intentalo de nuevo.",
    });
  }
}

async function submitForm(event, submitState, serviceResponse, ...POST_OBJ) {
  event.preventDefault();
  submitState(true);
  await formSubmission(serviceResponse, ...POST_OBJ);
  submitState(false);
}
