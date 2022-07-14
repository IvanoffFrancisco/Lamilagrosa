function Error({ message }) {
  return (
    <p className="bg-red-600 w-full p-3 text-white uppercase font-semibold rounded-md text-center my-1 text-xs">
      {message}
    </p>
  );
}

export default Error;
