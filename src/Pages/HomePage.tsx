import LibraryDropDown from "../Components/LibraryDropDown";
import { useState } from "react";
import { LibraryEntity } from '../Components/LibraryDropDown';
import HomeIcon from '@mui/icons-material/Home';
import SideMenu from "./SideMenu";

function HomePage() {
  const [selectedLibrary, setSelectedLibrary] = useState<LibraryEntity | null>(null);
  const [showDropDown, setShowDropDown] = useState<boolean>(true);

  const handleHomeClick = () => {
    setShowDropDown(true); // Mostrar o dropdown ao clicar no HomeIcon
    setSelectedLibrary(null); // Limpar a biblioteca selecionada
  };

  const handleDropDownSelect = (library: LibraryEntity | null) => {
    setSelectedLibrary(library);
    setShowDropDown(false); // Esconder o dropdown ao selecionar uma biblioteca
  };

  return (
    <div>
    <div style={{ position: 'absolute', top: 0, left: 0, margin: '10px' }}>
      <button onClick={handleHomeClick} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
        <HomeIcon style={{ fontSize: 40, color: 'black' }} />
      </button>
    </div>
    {showDropDown ? (
      <div >
        <LibraryDropDown
          selectedLibrary={selectedLibrary}
          setSelectedLibrary={handleDropDownSelect}
        />
      </div>
    ) : (
      <div>
        <SideMenu selectedLibrary={selectedLibrary} />
      </div>
    )}
  </div>
);
}

export default HomePage;
