import { Lens, SearchBtn, SearchContainer, SearchLabel } from "./StsSearch"


const SearchBar = () => {
    return(<>
    
    <SearchContainer>
        <SearchLabel>O que você procura hoje?</SearchLabel>
        <SearchBtn className="btnSearch">
            <Lens
            src="src\assets\lupa.png" 
            alt="Lens Icon"
            />
        </SearchBtn>
    </SearchContainer>
    
    
    
    </>)
}

export default SearchBar