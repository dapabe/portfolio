export default function SectionContact() {
  return (
    <section className="">
      <form
        action=""
        className="rounded-md bg-gradient-to-r from-vaporBlue via-vaporViolet to-vaporBlue"
      >
        <fieldset>
          <legend>¿Te interesa lo que ves?</legend>
          <p>
            <label htmlFor="email"></label>
            <input id="email" type="email" />
          </p>
        </fieldset>
      </form>
    </section>
  );
}
