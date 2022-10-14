const Politician = ({ name, party, cons, position }) => {
    return (
        <div className="grid justify-center">
            <div className="justify-self-center sm:justify-self-start w-[200px] h-[200px] bg-Moody-blue rounded"></div>
            <div className="mt-5">
                <p className="mb-1 text-lg min-w-[250px] min-w-[250px]">{name}</p>
                <p className="mb-1 ">Party: {party}</p>
                <p className="mb-1 ">Position Sought: {position}</p>
                <p>Constituency: {cons}</p>
            </div>
        </div>
    )
}

export default Politician