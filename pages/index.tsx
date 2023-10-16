import { useContext } from "react"
import AuthContext from "@/context/AuthContext"

interface FileModelInt {
  _id: string,
  name: string,
  filepath: string,
  size: number,
  encoding: string,
  mdf5: string,
  mimtype: string,
  owner: string,
  createdAt: string,
  updatedAt: string
}

export default function HomePage(props: { images: FileModelInt[] }) {

  const { accessToken, refreshToken } = useContext(AuthContext)

  const { images } = props
  function imageHandler() {
    return images.map(item => {
      return (
        <div key={item._id} className="image-box">
          <img src={item.filepath} alt={item.name} />
        </div>
      )
    })
  }

  return (
    <div className="home-page">
      <div className="image-gallery">
        {imageHandler()}
      </div>
    </div>
  )
}


export async function getStaticProps() {

  const response = await fetch('http://localhost:3030/api/file/myfiles', {
    headers: {
      "access-token": "",
      "refresh-token": ""
    }
  });

  const { success, data, message, error } = await response.json()
  if (!success || error || !data) return {
    props: {images: []}
  }
  return {
    props: { images: data }
  }

}