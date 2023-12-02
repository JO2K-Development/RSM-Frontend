const allProviders = () => {
 

    return fetch(`http://localhost:8080/api/v1/provider`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  };
  export default allProviders;