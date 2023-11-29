import { NextApiRequest, NextApiResponse } from "next"

function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        
        res.json({...req.body})
    }
}

export default handler