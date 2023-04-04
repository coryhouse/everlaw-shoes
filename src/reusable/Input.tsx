type InputProps = {
  /** HTML ID */
  id: string;

  /** Input label */
  label: string;
};

export function Input(props: InputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type="text" className="border" />
    </div>
  );
}
