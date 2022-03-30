import React, { useState } from "react";

const CreateEL = React.createElement;

export default function CreateInput(props) {
  const [focused, setFocused] = useState(false);
  const { node, _id, label, onChange, errorMessage, ...attrs } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <label
        htmlFor={_id}
        {...(label.className && { className: label.className })}
      >
        {label.text}
      </label>
      {CreateEL(
        node,
        {
          ...attrs,
          id: _id,
          onChange: onChange,
          onBlur: handleFocus,
          focused: focused.toString(),
        },
        null
      )}
      <span className="inputError">{errorMessage}</span>
    </div>
  );
}
