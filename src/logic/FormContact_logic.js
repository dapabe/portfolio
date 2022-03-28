const Formspark_FORM_ID = import.meta.env.VITE_FORMSPARK_FORM_ID;
const Formspark_URL = `https://submit-form.com/${Formspark_FORM_ID}`;

async function postSubmission(serviceResponse, ...POST_OBJ) {
  try {
    // const result = await fetch(Formspark_URL, {
    //   method: "POST",
    //   // mode: "no-cors",
    //   body: JSON.stringify(...POST_OBJ),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //     "Access-Control-Allow-Origin": "https://formspark.io",
    //   },
    // });
    serviceResponse({
      class: "",
      text: "El mensaje se ha enviado con exito, me pondre en contacto lo antes posible.",
    });
  } catch (error) {
    serviceResponse({
      class: "text-red-600 font-semibold",
      text: "Ha habido un error, por favor intentalo mas tarde.",
    });
  }
}

export async function submitForm(
  event,
  submitState,
  serviceResponse,
  ...POST_OBJ
) {
  event.preventDefault();
  submitState(true);
  await postSubmission(serviceResponse, ...POST_OBJ);
  submitState(false);
}
