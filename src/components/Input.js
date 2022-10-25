export default function Input({ type = "text", id, label }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </>
  );
}
