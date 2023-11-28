import { NextApiRequest, NextApiResponse } from "next"
import { readFile, writeFile } from "fs/promises";
import path from "path";

export const readWroteFeedbacks = async () => {
    const filePath = path.join(process.cwd(), "Stone", "db.json")
    const stringifyData = await readFile(filePath, { encoding: "utf8" })
    const feedbacks: [{ name: string, email: string, message: string }] = JSON.parse(stringifyData)
    return { feedbacks, filePath }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {

        const { feedbacks, filePath } = await readWroteFeedbacks()
        feedbacks.push({ name: req.body.name, email: req.body.email, message: req.body.message })

        const isFileWrote = await writeFile(filePath, JSON.stringify(feedbacks))

        return res.status(200).json({ success: true, message: "File wrote on the disk." })
    } else {
        res.status(400).json({ success: false, message: "Something went wrong!" })
    }
}

export default handler