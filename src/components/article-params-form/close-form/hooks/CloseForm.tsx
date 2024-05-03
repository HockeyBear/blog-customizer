import { RefObject, useEffect } from "react";

export const CloseForm = (
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  ref: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    function clickOutside(event: MouseEvent) {
      const { target } = event;
      if (
        isOpen &&
        target instanceof Node &&
        !ref.current?.contains(target) &&
        document.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("click", clickOutside);
    }

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [isOpen, setIsOpen, ref]);
};
