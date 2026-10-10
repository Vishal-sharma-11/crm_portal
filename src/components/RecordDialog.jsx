import Icon from "./Icon";
import { fields } from "../config/fields";
import { entityLabels } from "../config/pages";

const DIALOG_ICONS = { policies: "shield", tasks: "check" };
const WIDE_FIELDS = ["email", "vehicle"];

function RecordDialog({ type, item, values, setValues, onClose, onSubmit }) {
  const title = `${item ? "Edit" : "Add"} ${entityLabels[type]}`;
  const set = (name, value) =>
    setValues((current) => ({ ...current, [name]: value }));

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="record-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <div className="dialog-top">
          <span className="dialog-icon">
            <Icon name={DIALOG_ICONS[type] || "user"} size={19} />
          </span>
          <button className="icon-button" title="Close" onClick={onClose}>
            <Icon name="close" size={18} />
          </button>
        </div>
        <div className="dialog-heading">
          <span className="panel-kicker">INSURANCE DESK</span>
          <h2 id="dialog-title">{title}</h2>
          <p>Keep the details up to date in your workspace.</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-grid">
            {fields[type].map((field) => (
              <label
                className={`form-field ${WIDE_FIELDS.includes(field.name) ? "form-field-wide" : ""}`}
                key={field.name}
              >
                <span>
                  {field.label}
                  {field.required && <em> *</em>}
                </span>
                {field.options ? (
                  <select
                    required={field.required}
                    value={values[field.name] || field.options[0]}
                    onChange={(event) => set(field.name, event.target.value)}
                  >
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    required={field.required}
                    type={field.type || "text"}
                    value={values[field.name] ?? ""}
                    onChange={(event) => set(field.name, event.target.value)}
                  />
                )}
              </label>
            ))}
          </div>
          <div className="dialog-actions">
            <button type="button" className="secondary-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="primary-button">
              {item ? "Save changes" : "Add record"}
              <Icon name="arrow" size={16} />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default RecordDialog;
