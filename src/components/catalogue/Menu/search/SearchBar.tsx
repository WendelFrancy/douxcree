import { Lens, SearchBtn, SearchContainer, SearchInput } from "./StsSearch"




const SearchBar = () => {

    return (
        <>
            <SearchContainer
                className="searchContainer"
            >
                <SearchInput
                    type="text"
                    placeholder="O que você está buscando hoje?"
                />
                <SearchBtn 
                className="btnSearch"
                onClick={(e) => {
                    e.preventDefault()
                    alert('Você clicou');
                }}
                >
                    <Lens
                        src="src\assets\lupa.png"
                        alt="Lens Icon"
                    />
                </SearchBtn>
            </SearchContainer>
        </>)
}

export default SearchBar