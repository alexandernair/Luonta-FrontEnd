import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import data from "../engine/static/parkData.json";

export default function ParkCard(props: { code: string }) {
  const code = props.code;
  const { name, description } = data.filter((park) => park.code === code)[0];

  const navigate = useNavigate();

  const routeToParkInfo = () => {
    navigate(`/park/${code}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={"https://mui.com/static/images/cards/contemplative-reptile.jpg"}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={routeToParkInfo} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}