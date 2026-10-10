import { useState } from "react";
import { getDefaultStatus } from "../config/pages";

export function useRecordDialog() {
  const [modal, setModal] = useState(null); // { type, item } | null
  const [formValues, setFormValues] = useState({});

  const openForm = (type, item = null) => {
    setFormValues(item ? { ...item } : { status: getDefaultStatus(type) });
    setModal({ type, item });
  };

  const closeForm = () => setModal(null);

  return { modal, formValues, setFormValues, openForm, closeForm };
}
