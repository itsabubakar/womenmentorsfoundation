import Image from "next/image"

const articleOne = () => {
  return (
    <div>
      <div className="relative grid justify-center">
        <Image alt="" src={`https://images.unsplash.com/photo-1573167627769-e201a7ddf409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`} width={600} height={300} />
        <h1 className="absolute justify-self-center top-1/2 text-white mx-2 text-2xl underline bottom-2 sm:max-w-lg sm:px-5">Leadership women are often seen as the pillars of their organizations.</h1>
      </div>
      <div className="my-20 mx-5 md:mx-0 flex justify-center">
        <div className="max-w-xl">
          <p className="mb-6">They are typically individuals who have the ability to motivate and inspire their teams to work together and achieve common goals. They are also often able to handle difficult situations with grace and poise.</p>
          <p className="mb-6">Many successful leaders were once just ordinary women who were willing to put in the extra effort. They often have to overcome many obstacles in their careers, including discrimination and glass ceilings. However, they continue to work hard and achieve great things.</p>
          <p className="mb-6">There are many different types of leadership women. Some are more outgoing and expressive, while others are more analytical and strategic. Regardless of their personality type, all leaders need to be able to communicate effectively and motivate their teams to achieve success.</p>
          <p>There are many opportunities for women in the leadership field. Whether they want to lead a company or an entire country, there is no limit to what they can achieve. It is important for young girls to see women in leadership positions and understand that anything is possible.</p>
        </div>

      </div>
    </div>
  )
}

export default articleOne