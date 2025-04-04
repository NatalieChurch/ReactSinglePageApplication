function SelectCat ({cat, setSelectedCat}){
    return(
        <>
            <img src={cat.image} style={{height:"400px"}}/>
            <p>{cat.name}</p>
            <p>{cat.breed}</p>
            <button onClick={()=>setSelectedCat(null)}>Go Back</button>
        </>
    )
}

export default SelectCat