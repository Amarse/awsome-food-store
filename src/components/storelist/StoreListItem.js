
export default function StoreList({ item }) {
  const { name, url, description , image} = item;

  return (
    <>
    <div>{image}</div>
    <div>{name}</div>
    <div>{url}</div>
    <div>{description}</div>
    </>
  );
}
