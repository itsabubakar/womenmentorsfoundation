const Politician = ({ name, party, cons, position }) => {
    return (
        <div className="grid justify-center">
            {/* <div className="justify-self-center sm:justify-self-start w-[200px] h-[200px] bg-gray-800 rounded"></div> */}
            <div className="mt-5 sm:min-w-[250px] sm:max-w-[250px]">
                <p className="mb-1 text-lg sm:min-w-[250px] sm:max-w-[250px] ">{name}</p>
                <p className="mb-1 ">Party: {party}</p>
                <p className="mb-1 ">Position Sought: {position}</p>
                <p>{cons ? `Constituency: ${cons}` : ''}</p>
            </div>
        </div>
    )
}

export default Politician