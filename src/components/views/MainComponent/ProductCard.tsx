import { FC } from "react";
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { IProduct } from '../../../types/types';

interface ProductCardProps {
    product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    if (!product) {
        return (
            <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        It tooks few seconds to load posts
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Loading...
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card variant="outlined" sx={{ marginBottom: 2 }}>
            <CardContent>
                <Avatar src={product.image} sx={{ borderRadius: 2 }}/>
                <Typography variant="body2" color="text.secondary">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;