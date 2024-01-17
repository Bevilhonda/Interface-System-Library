
import Title from "../Components/Title";
import GetAllLibraries from "../Components/GetAllLibraries";
import { useState } from "react";



function HomePage() {

  const [selectedLibrary, setSelectedLibrary] = useState<Number | null>(null);

  return (
    <div>
      <Title />

      <GetAllLibraries
        selectedLibrary={selectedLibrary} setSelectedLibrary={setSelectedLibrary} />


    </div>
  )
}

export default HomePage