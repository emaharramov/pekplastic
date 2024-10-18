import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = (urlname) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/${urlname}`);
        
        if (Array.isArray(res.data)) {
          const formattedData = res.data.map(item => {
            const content = item.content.rendered;

            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');
            const imgElement = doc.querySelector('img');

            return {
              id: item.id,
              title: item.title.rendered,
              image: imgElement ? imgElement.src : null,
              content: content,
            };
          });
          setData(formattedData);
        } else {
          const content = res.data.content.rendered;

          const parser = new DOMParser();
          const doc = parser.parseFromString(content, 'text/html');
          const imgElement = doc.querySelector('img'); 
          setData({
            id: res.data.id,
            title: res.data.title.rendered,
            image: imgElement ? imgElement.src : null,
            content: content
          });
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [urlname]);

  return { data, loading, error };
};

export default FetchData;
