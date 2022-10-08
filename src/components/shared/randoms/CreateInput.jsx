import useToggle from "@src/components/hooks/useToggle";
import { createElement } from "react";

export default function CreateInput(props) {
  const [isFocused, toggleFocus] = useToggle();
  const { node, id, label, onChange, errorMessage, ...attr } = props;

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
          id,
          onChange,
          onBlur: toggleFocus,
          // onFocus: lastInput,
          focused: isFocused.toString(),
        },
        null
      )}
      <span className="block select-none font-Raleway text-sm text-red-600 opacity-0 transition-opacity">
        {errorMessage}
      </span>
    </div>
  );
}
