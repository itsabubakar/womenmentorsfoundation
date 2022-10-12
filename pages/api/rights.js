
import data from './data'
// api/right

export default function handler(req, res) {
    const { Rights } = data;
    if (Rights) return res.status(200).json(Rights)
    return res.status(404).json({ error: "Data Not Found" })
}