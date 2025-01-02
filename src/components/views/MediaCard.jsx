import { Card } from "@mui/material";
import { TM_CONFIG } from "../../configs/constants";

const MediaCard = ({ item }) => {

  return (
    <Card sx={{ width: "100%", mt: 4 }}>
      <img
        src={`${TM_CONFIG.IMAGE_BASE_URL}/${item.poster_path}`}
        alt={item.title}
      />
      <h3>{item.title}</h3>
      <p>{item.overview}</p>
    </Card>
  );
};

export default MediaCard;
