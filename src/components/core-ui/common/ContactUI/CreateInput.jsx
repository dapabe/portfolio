import React, { useState } from "react";

export default function CreateInput(props) {
  const [focused, setFocused] = useState(false);
  const { node, _id, label, onChange, errorMessage, ...attr } = props;

  const handleFocus = () => {
    setFocused(true);
  };
  // const lastInput = () => attrs.name === "message" && setFocused(true);  <-  good UX?

  //  Considering refactoring this.
  //  [NOTE] Input attributes/events:
  //  --------------------------------
  //  onChange: is being setted 2 lvls up.          PROP DRILLING ISSUE
  //  onBlur: checks if the user Clicks
  //    and leaves the INPUT, if so, then
  //    sets the focused attribute to a boolean.
  //  onFocus:  checks if user Clicked 1 time.      NOT USED

  return (
    <div>
      <label
        htmlFor={_id}
        {...(label.className && { className: label.className })}
      >
        {label.text}
      </label>
      {React.createElement(
        node,
        {
          ...attr,
          id: _id,
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
