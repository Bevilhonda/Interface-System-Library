
import LibraryDropDown from "../Components/LibraryDropDown";
import { useState } from "react";



function HomePage() {

  const [selectedLibrary, setSelectedLibrary] = useState<Number | null>(null);

  return (
    <div>

      <LibraryDropDown
        selectedLibrary={selectedLibrary} setSelectedLibrary={setSelectedLibrary} />
        

    </div>
  )
}

export default HomePage