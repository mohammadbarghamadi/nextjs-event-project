import { readFile, writeFile } from "fs/promises";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next"

export interface CommentModel {
    _id: string,
    name: string,
    email: string,
    comment: string,
    commentId: string
}

type ReadComments = () => Promise<CommentModel[]>

const readComments: ReadComments = async () => {
    const filePath = path.join(process.cwd(), "Stone", "comments.json")
    const comments = await readFile(filePath, { encoding: "utf8" })
    return JSON.parse(comments)
}


function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {

        const _id = (Date.now() + "-" + Math.floor(Math.random() * 999999 + 100000) + "-" + Math.floor(Math.random() * 999999999999999 + 100000000000000)).toString()
        const comment = { _id, ...req.body }

        const storeComment = async () => {
            const comments = await readComments()
            comments.push(comment)
            const filePath = path.join(process.cwd(), "Stone", "comments.json")
            await writeFile(filePath, JSON.stringify(comments))
        }

        storeComment()

        res.json({ success: true, data: comment })

    }
}

export default handler