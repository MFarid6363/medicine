import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import styles from "./styles.module.css";

export default function BasicAlerts({ alertMsg, type, setAlert }) {
  useEffect(() => {
    let timeout;
    if (type) {
      timeout = setTimeout(() => {
        setAlert("");
      }, 5000);
    }
    return () => {
      // 👇️ clear timeout when the component unmounts
      clearTimeout(timeout);
    };
  }, [type]);
  return (
    <div className={styles.Alert}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {(() => {
          switch (type) {
            case "error":
              return <Alert severity="error">{alertMsg}</Alert>;
            case "warning":
              return <Alert severity="warning">{alertMsg} </Alert>;
            case "info":
              return <Alert severity="info">{alertMsg} </Alert>;
            case "success":
              return <Alert severity="success">{alertMsg} </Alert>;
            default:
              return null;
          }
        })()}
      </Stack>
    </div>
  );
}
