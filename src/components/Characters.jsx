import { useQuery } from "react-query";
import Character from "./Character";
import { useState } from "react";


function Characters() {
    const [page, setPage] = useState(1);
    const fetchCharacters = async() => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        return response.json();
    }
    const {data, isLoading, isError, isPreviousData} = useQuery(['characters', page], fetchCharacters, {
        keepPreviousData: true
    });
    
    
    if(isLoading) {
        return <div>Loading...</div>
    }
    if(isError) {
        return <div className="loading">Something went wrong...</div>
    }
    return (
        <div className="characters">
            {data.results.map((character, key) => {
                // return <Character character={character} key={key} />;
                return (
                        <Character character={character} key={key} />
                )
            })}
            <div className="btn-group">
                <button disabled={page === 1} onClick={()=>setPage((old) => old - 1)}>Previous</button>
                <button disabled={!data.info.next} onClick={()=>{
                    if(page > data.info.pages) {
                        setPage(1);
                    }
                    setPage((old) => old + 1)
                    }}>Next</button>
            </div>
            
        </div>
    )
}

export default Characters;