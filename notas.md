```javascript
//===============================================================================
//cargar todos los documentos cuando se inicie la app

useEffect(() => {
    // Realiza la llamada a la API y muestra la lista de documentos en la consola
    const url = `http://10.11.230.23:3002/api/as/v1/engines/nadhis-documentos/documents/list`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer private-883611duideiq7kv66vmtjfb',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((apiData) => {
        if (apiData.results && apiData.results.length > 0) {
          const resultado = apiData.results.map(({id, Title, Content, Path, Categorias}) => ({
            id,
            Title, 
            Content,
            Path,
            Categorias,
          }));
         
          setTitles(resultado);
          setShowResults(true);
        } else {
          console.error('No se encontraron resultados válidos en la respuesta de la API.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

   //============================= Api app search ======================================================      
    const raw = JSON.stringify({
      "search_fields": {
        "Title": {
          "weight": 99
        },
        "Content":{
          "weight": 1
        } 
      },
      "query": valorBusqueda
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const url = "http://10.11.230.23:3002/api/as/v1/engines/nadhis-documentos/search";
    fetch(url, requestOptions )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((apiData) => {
 
        // const results =  {
        //     id: apiData.results[0].id.raw,
        //     Title: apiData.results[0].Title.raw,
        //     Content: apiData.results[0].Content.raw,
        //     Path: apiData.results[0].Path.raw,
        //     Categorias: apiData.results[0].Categorias.raw,
        //     Extensión: apiData.results[0].Extensión.raw,
        //   }
        //   console.log(results.Title)
       
      
        const results = apiData.results.map((item) => ({
          id: item.id.raw,
          Title: item.Title.raw,
          Content: item.Content.raw,
          Path: item.Path.raw,
          Categorias: item.Categorias.raw,
          Extensión: item.Extensión.raw,
        }));
        setData(results);
        setShowResults(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

//==========================================================================
//header para peticion
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic Y2l0cmE6Y2l0cjQuMjAyMg==");      


```