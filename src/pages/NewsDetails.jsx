import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
    const { data } = useLoaderData();
    console.log(data[0]);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-3 ">Dragon News</h2>
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={data[0]?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{data[0]?.title}</h2>
                            <p>{data[0]?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${data[0].category_id}`} className="btn btn-neutral">Back To Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;