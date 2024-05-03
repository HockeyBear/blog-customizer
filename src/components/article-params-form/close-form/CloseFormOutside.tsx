import { ReactNode, useRef } from "react";
import { CloseForm } from "./hooks/CloseForm";

type CloseFormProps = {
  isOpen: boolean,
  setIsOpen: (value: boolean) => void,
  children: ReactNode
}

export const CloseFormOutside = ({ isOpen, setIsOpen, children }: CloseFormProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  CloseForm(isOpen, setIsOpen, wrapperRef);
  return <div ref={wrapperRef}>{children}</div>;
}
