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

```