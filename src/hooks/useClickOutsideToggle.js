import { useEffect, useRef, useState } from "react";

const useClickOutsideToggle = ({ ignoreRefs = [] } = {}) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutside = ignoreRefs.every((ignoreRef) => (
        !ignoreRef.current || !ignoreRef.current.contains(event.target)
      ));

      if (ref.current && !ref.current.contains(event.target) && isOutside) {
        setExpanded(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref, ignoreRefs]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
