import { useEffect, useRef, useState } from "react";

// Custom hook to handle toggling based on clicks outside a specified element
const useClickOutsideToggle = ({ ignoreRefs = [] } = {}) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked target is outside the specified element and ignoreRefs
      const isOutside = ignoreRefs.every(
        (ignoreRef) =>
          !ignoreRef.current || !ignoreRef.current.contains(event.target)
      );

      // Collapse the element if it is clicked outside
      if (ref.current && !ref.current.contains(event.target) && isOutside) {
        setExpanded(false);
      }
    };

    // Attach click event listener to detect clicks outside the element
    document.addEventListener("mouseup", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref, ignoreRefs]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
