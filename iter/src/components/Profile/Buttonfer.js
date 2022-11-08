import * as React from "react";
import Button1 from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <Button1 variant="outlined" color="warning">
        팔로워
      </Button1>
    </Stack>
  );
}