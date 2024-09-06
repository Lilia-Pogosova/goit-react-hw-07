import { Hearts } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";

const Loader = () => {
    return (
        <div className={css.loader}>
            <Hearts
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;