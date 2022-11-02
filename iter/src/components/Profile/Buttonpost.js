import * as React from "react";
import Button3 from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <Button3 variant="outlined" color="warning">
        게시글
      </Button3>
    </Stack>
  );
}
