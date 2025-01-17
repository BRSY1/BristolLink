import { useState, useEffect } from "react";
import api from "../utils/api";

const useMatchData = () => {
  const [matchloading, setMatchLoading] = useState(false);
  const [match, setMatch] = useState(null);
  const [matchErrorMsg, setMatchErrorMsg] = useState("");

  useEffect(() => {
    const fetchMatch = async () => {
      setMatchLoading(true);
      setMatchErrorMsg("");

      try {
        const response = await api.get("/match");
        console.log(response.data);
        setMatch(response.data[0]);
      } catch (err) {
        setMatchErrorMsg("Failed to fetch match from database");
      } finally {
        setMatchLoading(false);
      }
    };

    fetchMatch();
  }, []);

  return { matchloading, match, matchErrorMsg };
};

export default useMatchData;
