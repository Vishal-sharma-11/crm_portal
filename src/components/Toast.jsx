function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="toast-message" role="status">
      <span className="toast-check">✓</span>
      {message}
    </div>
  );
}

export default Toast;
