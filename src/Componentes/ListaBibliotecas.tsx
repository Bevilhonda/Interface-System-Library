import React, { useEffect, useState } from 'react';
import axios from 'axios';

type LibraryEntity = { // criei o tipo LibraryEntity com atributos iguais da API JAVA
  idLibrary: number;
  name: string;
  address: number;
};

/* quando o componente  GetAllLibrarys é iniciado e logo após ele ler o useEstate , 
o useEffect é iniciado e faz o GetAllLibrarys esperar os acontecimentos 
dentro da função searchDataLibrarys() acontecer , se caso tudo der certo a variavel
libraries terá um novo valor ;*/
const GetAllLibrarys = function () {
  const [libraries, setLibraries] = useState<LibraryEntity[] | null> (null);
  // libraries inicia como null , e  vai ser um array do tipo LibraryEntity ou array vazio.

  useEffect(function () {
    // enquanto o componente GetAllLibrarys é montado o useEffect entra em ação 

    // e ele tem dois argumentos uma função e um array vazio
    const searchDataLibrarys = async function () {
      /* minha constante searchDataLibrarys recebe uma função assíncrona async function() ,
        que é o primeiro argumento do useEffect*/

      try {

        const response = await axios.get('http://localhost:8080/Librarys');
        //Promessa , que no caso é o resultado que vai vim da requisição

        /* e aqui faz uma requisição usando o axios , e o await faz com que a 
        execução do código aguarde até que a operação de requisição seja 
        concluída e a resposta seja recebida.
         A resposta pode ser pode ser um erro  */

        console.log(response.data); // Conferir o formato da resposta no console com f12

        setLibraries(response.data.libraryList); /* Aqui é onde vai mudar o estado
        da variavel libraries com o resultado que veio da requisição  */

      } catch (error) {
        console.error('Erro na requisição:', error);// Conferir algum erro no console com f12
      }
    };

    searchDataLibrarys();
  }, []);
  /* O array vazio [] garante que o efeito só ocorra uma vez porque não
   tem nada dentro como dependência para reexecutar o useEffect novamente */

  return (
    <div style={{
      width: 900, padding: 10, height: '530px', marginTop: '-530px',
      marginLeft: '550px'
    }}>

      {libraries ? (/* se libraries existir, o map entra em ação e renderiza a lista 
      ele percorre libraries e para cada library que é do tipo LibraryEntity 
      e tem o indice com ID unico renderiza name e address 
      a chave KEY é única e é cada ID de cada library*/
        <ul>
          {libraries.map((library: LibraryEntity) => (

            <li style={{ color: "greenyellow" }}
              key={library.idLibrary?.toString()}> 

              {library.name} - {library.address}
            </li>
          ))}
        </ul>
      ) : ( // SE LIBRARIES NÃO EXISTIR RENDERIZA ESSA MENSAGEM DE Carregando bibliotecas...
        <p style={{ color: "greenyellow" }}>Carregando bibliotecas...</p>
      )}
    </div>
  );
};

export default GetAllLibrarys;
