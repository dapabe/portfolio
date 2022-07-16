import { useState, createElement } from "react";

export default function CreateInput(props) {
  const [focused, setFocused] = useState(false);
  const { node, id, label, onChange, errorMessage, ...attr } = props;

  const handleFocus = () => setFocused(true);

  // const lastInput = () => attrs.name === "message" && setFocused(true);  <-  good UX?

  //  Considering refactoring this.
  //  [NOTE] Input attributes/events:
  //  --------------------------------
  //  onBlur: checks if the user Clicks
  //    and leaves the INPUT, if so, then
  //    sets the focused attribute to TRUE.
  //  onFocus:  checks if user Clicked 1 time.      NOT USED

  return (
    <div className="inputContainer">
      <label htmlFor={id}>{label}</label>
      {createElement(
        node,
        {
          ...attr,
          id: id,
          ...(attr.type === "message" && {
            className: attr.className + " resize-none", // tailwindcss resize class doesn't work properly
          }),
          onChange: onChange,
          onBlur: handleFocus,
          // onFocus: lastInput,
          focused: focused.toString(),
        },
        null
      )}
      <span className="inputError">{errorMessage}</span>
    </div>
  );
}
