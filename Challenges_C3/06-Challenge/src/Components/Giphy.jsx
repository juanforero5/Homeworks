import { useFetch } from "./useFetch";
export const Giphy =  ()=> {

  const { data, isLoading, hasError } = useFetch('https://api.giphy.com/v1/gifs/search?api_key=pF8Oaqk10NJqk8Ksp1OFD2GNDIp1Pm10=cats');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError}</div>;
  }

  return (
    <div>
      <h1>Gatitos</h1>
      {data && data.data.map(gif => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </div>
  );
};





