import { NextApiRequest, NextApiResponse } from "next";
import { readFile } from "fs/promises"
import path from "path";
import { CommentModel } from ".";

type GetComments = () => Promise<CommentModel[]>

export const getComments: GetComments = async () => {
    const filePath = path.join(process.cwd(), "Stone", "comments.json")
    const comments = await readFile(filePath, { encoding: "utf8" })
    return JSON.parse(comments)
}

function handler(req: NextApiRequest, res: NextApiResponse) {

}

export default handler