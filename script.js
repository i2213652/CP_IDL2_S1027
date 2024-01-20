function Consultar(url) {
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: "api_1",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
    })
    .then((data) => {
      document.getElementById(
        "resultado"
      ).innerHTML = `Respuesta de la API: ${data}`;
    })
    .catch((error) => {
      document.getElementById(
        "resultado"
      ).innerHTML = `Error: ${error.message}`;
    });
}
