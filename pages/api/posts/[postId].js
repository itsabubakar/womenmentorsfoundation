import data from '../data'

export default function handler(req, res) {
    const { postId } = req.query;
    const { Post } = data;

    if (postId) {
        const post = Post.find(value => value.id == postId)
        return res.status(200).json(post)
    }
    return res.status(404).json({ error: "Post not found" })
}