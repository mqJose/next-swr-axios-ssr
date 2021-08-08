import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
// import Categorycard from "../components/Category/Categorycard"
// import CategoryLoading from "../components/Category/CategoryLoading"

export default function Home({ categories }) {
  const { data, error } = useSWR("/categories", { initialData: categories })
  return (
    <div>
      <Head>
        <title>Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*   
      <div>
        //loop through category list using `data`
        {!data ? <CategoryLoading /> : data.categories.map(category => (
          <div key={category._id}>
            <CategoryCard category={category} />
          </div>
        ))}
      </div> 

      */}
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await axios.get("/categories");

    return {
      props: {
        categories: res.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};