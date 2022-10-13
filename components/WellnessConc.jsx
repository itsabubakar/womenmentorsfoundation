import Article from "./_child/ArticleLink"

const WellnessConc = () => {
    return (
        <div className="mt-20 flex justify-center bg-Sail">
            <div className="bg-white pt-5 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1200px] gap-10">
                <Article img={`https://images.unsplash.com/photo-1505421031134-e57263cae630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwd29tZW4lMjBleGVyY2lzaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`} />
                <Article img={`https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGV4ZXJjaXNpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`} />
                <Article img={`https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`} />
            </div>

        </div>
    )
}

export default WellnessConc