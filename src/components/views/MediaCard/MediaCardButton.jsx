import { Button } from "@mui/material";

const MediaCardButton = ({
  onClick,
  text,
  startIcon,
  variant,
  color,
  fullWidth,
  sx,
}) => (
  <Button
    size="small"
    variant={variant}
    color={color}
    fullWidth={fullWidth}
    sx={sx}
    onClick={onClick}
    startIcon={startIcon}
  >
    {text}
  </Button>
);

export default MediaCardButton;
