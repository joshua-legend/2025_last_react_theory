import Button from "./Button";

const Quiz1 = () => {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
      <Button backgroundColor="primary" borderRadius="hard" />
      <Button backgroundColor="primary" borderRadius="smooth" />
      <Button backgroundColor="primary" borderRadius="circle" />
      <Button backgroundColor="secondary" borderRadius="hard" />
      <Button backgroundColor="secondary" borderRadius="smooth" />
      <Button backgroundColor="secondary" borderRadius="circle" />
    </section>
  );
};

export default Quiz1;
