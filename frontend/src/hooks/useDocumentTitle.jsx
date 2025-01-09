import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - BristolLink`;
  }, [title]);
};

export default useDocumentTitle;
