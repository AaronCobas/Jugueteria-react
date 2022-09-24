import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartContext';
import { useContext } from 'react';
const CartWidget = () => {
    const { itemAmount } = useContext(CartContext)
    return (
        <Badge badgeContent={itemAmount() || 0} color="secondary">
            <ShoppingCartIcon />
        </Badge>
    );
}

export default CartWidget;