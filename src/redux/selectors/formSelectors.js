import { useSelector } from "react-redux";

export function useGetNameField() {
  return useSelector((state) => state.form.nameField);
}

export function useGetEmailField() {
  return useSelector((state) => state.form.emailField);
}

export function useGetMessageField() {
  return useSelector((state) => state.form.messageField);
}
