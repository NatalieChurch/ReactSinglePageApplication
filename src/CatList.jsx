function CatList({cats, setCats, selectedCat, setSelectedCat}){
    return(
        <>
        {
            cats.map((cat) => 
                <div key={cat.breed}>
                    <h2>{cat.breed}</h2>
                    <p>{cat.coat}</p>
                    <p>{cat.country}</p>
                    <p>{cat.origin}</p>
                    <p>{cat.pattern}</p>
                    <button onClick={()=>setSelectedCat(cat)}>
                        Look at this cat
                    </button>

                </div>
            )
        }
        </>
    )
}

export default CatList