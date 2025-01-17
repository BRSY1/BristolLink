import { useState, useEffect } from "react";
import api from "../utils/api";

const useCrushSubmission = () => {
  const [submissionloading, setSubmissionLoading] = useState(false);
  const [submission, setSubmission] = useState(null);
  const [submissionErrorMsg, setSubmissionErrorMsg] = useState("");

  useEffect(() => {
    const fetchSubmission = async () => {
      setSubmissionLoading(true);
      setSubmissionErrorMsg("");

      try {
        const response = await api.get("/crush/get");
        console.log(response.data);
        setSubmission(response.data[0]);
      } catch (err) {
        setSubmissionErrorMsg("Failed to fetch submission from database");
      } finally {
        setSubmissionLoading(false);
      }
    };

    fetchSubmission();
  }, []);

  return { submissionloading, submission, submissionErrorMsg };
};

export default useCrushSubmission;
