import Article from "./_child/ArticleLink"

const RightsConc = () => {
    return (
        <div className="mt-20 flex justify-center bg-Moody-blue">
            <div className="bg-white pt-5 px-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1200px] gap-10">
                <Article img={`https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`} />
                <Article img={`https://images.unsplash.com/photo-1550332781-aecd27f7434f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`} />
                <Article img={`https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60`} />
                <Article img={`https://images.unsplash.com/photo-1585870683904-a382fbb42754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`} />
                <Article img={`https://images.unsplash.com/photo-1473594659356-a404044aa2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBtdXNsaW0lMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`} />
                <Article img={`https://images.unsplash.com/photo-1573167627769-e201a7ddf409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`} />
            </div>

        </div>
    )
}

export default RightsConc