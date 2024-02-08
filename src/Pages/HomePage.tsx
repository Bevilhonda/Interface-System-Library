
import LibraryDropDown from "../Components/LibraryDropDown";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { LibraryEntity } from '../Components/LibraryDropDown';




function HomePage() {

  const [selectedLibrary, setSelectedLibrary] = useState<LibraryEntity | null>(null);

  return (
    <div>

      <LibraryDropDown
        selectedLibrary={selectedLibrary} setSelectedLibrary={setSelectedLibrary} />
        

        <SideMenu selectedLibrary={selectedLibrary} />
        
    </div>
  )
}

export default HomePage