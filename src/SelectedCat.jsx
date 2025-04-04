function SelectCat ({selectedCat, setSelectedCat}){
    console.log(selectedCat)
    return(
        <>
            <p>{selectedCat.breed}</p>
            <p>{selectedCat.coat}</p>
            <button onClick={()=>setSelectedCat(null)}>Go Back</button>
        </>
    )
}

export default SelectCat