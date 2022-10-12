import Image from "next/image"

const Article = ({ border, img }) => {
  return (
    <div className={border ? 'border rounded shadow-md' : ''}>
      <div>
        <Image src={img} width={500} height={300} />
      </div>
      <div className="px-5 py-3">
        <h2 className="text-xl xl:text-2xl text-gray-800">Women making a difference</h2>
        <p className="mt-4 text-gray-600 text-base">Grace Jacobs</p>
      </div>
    </div>
  )
}

export default Article