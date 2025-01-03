import { Box, IconButton } from "@mui/material";
import { SOCIAL_MEDIA } from "../../configs/constants";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "secondary.main",
        color: "primary.main",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
      }}
    >
      {SOCIAL_MEDIA.map((social) => (
        <IconButton
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          sx={{ color: "inherit", mx: 0.5 }}
          aria-label={social.name}
        >
          {social.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default Footer;
