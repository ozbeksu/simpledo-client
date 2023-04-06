import "./Alert.scss";
import React from "react";

type AlertProps = {
  message: string;
  status?: "default" | "success" | "error";
};

export default function Alert({ message, status = "default" }: AlertProps) {
  return <div className={`alert ${status}`}>{message}</div>;
}
