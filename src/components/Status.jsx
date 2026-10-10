const TONES = {
  green: ["Active", "Won", "Paid", "Done"],
  amber: ["Renewal due", "Part paid", "Quote sent", "High"],
  red: ["Expired", "Lost"],
};

const getTone = (value) =>
  Object.keys(TONES).find((tone) => TONES[tone].includes(value)) || "blue";

function Status({ value }) {
  return (
    <span className={`status status-${getTone(value)}`}>
      <span />
      {value}
    </span>
  );
}

export default Status;
