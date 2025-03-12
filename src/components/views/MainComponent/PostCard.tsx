import { FC } from "react";
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { IPost } from '../../../types/types';

interface PostCardProps {
    post: IPost;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const PostCard: FC<PostCardProps> = ({ post, onEdit, onDelete }) => {
    if (!post) {
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
                <Typography variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.body}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Author:</strong> {post.userId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Created At:</strong> {new Date(post.createdAt).toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Updated At:</strong> {new Date(post.updatedAt).toLocaleString()}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => onEdit(post.id)}>Edit</Button>
                <Button size="small" onClick={() => onDelete(post.id)}>Delete</Button>
            </CardActions>
        </Card>
    );
};

export default PostCard;