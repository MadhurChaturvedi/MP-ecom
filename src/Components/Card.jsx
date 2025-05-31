export default function Card({ SetData }) {
  if (!SetData) {
    return <p>Loading...</p>;
  }

  const { id, name, image, title, price, description } = SetData;

  return (
    <div key={id} className="group relative border p-3">
      <img
        src={image}
        alt={"Product image"}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />

      <div className="mt-4 flex justify-between flex-col">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={""}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">Name{name}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-900">{price}</p>
          {/* <p className="text-sm font-medium text-gray-900">{description}</p> */}
        </div>
      </div>
    </div>
  );
}
