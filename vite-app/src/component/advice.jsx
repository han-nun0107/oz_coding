import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      });
  }, [url]);
  return [isLoading, data];
};
const Advice = () => {
  const [isLoading, data] = useFetch(
    "https://korean-advice-open-api.vercel.app/api/advice"
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {!isLoading && (
          <>
            <div>{data.message}</div>
            <div>-{data.author}-</div>
          </>
        )}
      </div>
    </>
  );
};

export default Advice;
