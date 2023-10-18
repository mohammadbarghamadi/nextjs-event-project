import { Fragment, useContext, useState } from "react"
import AuthContext from "@/context/AuthContext"


export default function ImageUpload(props: { setImageId: (value: string) => void }) {

    const { setImageId } = props

    const { accessToken, refreshToken } = useContext(AuthContext)

    const [image, setImage] = useState<FormData>()
    const [isImageUploaded, setIsImageUploaded] = useState<boolean>()
    const [imagePath, setImagePath] = useState()
    const [readyToUpload, setReadyToUpload] = useState<boolean>(false)

    function uploadHandler(files: FileList | null) {
        if (files) {
            const fileData = new FormData()
            fileData.append(files[0].name, files[0])
            setImage(fileData)
            setReadyToUpload(true)
            console.log("Ready to Upload")
        }
    }

    function initialUpload() {
        if (image && readyToUpload) {
            uploadImage(image)
            console.log("File Uploaded")
        }
    }

    async function uploadImage(fileData: FormData) {

        const response = await fetch(`http://localhost:3030/api/file/upload`, {
            method: "POST",
            headers: {
                "access-token": accessToken,
                "refresh-token": refreshToken
            },
            body: fileData
        })

        const { success, error, message, data } = await response.json()

        if (success && data) {
            setImageId(data[0]._id)
            setImagePath(data[0].filepath)
            setIsImageUploaded(true)
        } else if (!success || error || message) {
            console.log(success, error, message)
        }
    }

    return (
        <Fragment>
            <label htmlFor="image">بارگذاری عکس</label><br />
            <input
                type="file"
                name="image"
                id="image"
                accept="image/jpg"
                onChange={e => uploadHandler(e.target.files)}
            />
            {!isImageUploaded ? 
                <div onClick={initialUpload}>بارگذاری تصویر</div>
                :
                <picture>
                    <img src={`/${imagePath}`} alt="avatar" />
                </picture>
            }
        </Fragment>
    )
}