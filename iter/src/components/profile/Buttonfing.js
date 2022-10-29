import * as React from "react";
import Button2 from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button2 variant="outlined" color="warning">
        팔로잉
      </Button2>
    </Stack>
  );
}
