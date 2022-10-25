export default function Select({ name, label, options }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name}>
        {options.map((state) => {
          return (
            <option key={state.abbreviation ? state.abbreviation : state.key}>
              {state.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
