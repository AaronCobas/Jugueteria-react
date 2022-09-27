import { Card } from "@mui/material"
import { CardMedia } from "@mui/material"
import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import { CardActions } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
const Juguete = ({id, title, image, description, stock, price}) => {
    return(
        <>
        <Card sx={{ maxWidth: 445 }}>
    <CardMedia
        component="img"
        height="500"
        image={image}
    />
    <CardContent className="card">
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Stock: {stock}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Id: {id}
        </Typography>
        <Typography variant="body2" color="text.primary">
            Precio: ${price}
        </Typography>
    </CardContent>
    <CardActions className="card">
        <Link to={`/item/${id}`}>
        <Button variant="contained" size="small">
            Más Información.
        </Button></Link>
    </CardActions>
    </Card>
    </>
    )
}
export default Juguete