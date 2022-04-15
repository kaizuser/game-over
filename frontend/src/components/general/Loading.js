import "../../styles/loading.css";
import PacmanLoader from "react-spinners/PacmanLoader";

const LoadingContainer = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="loadingContainer">
        <a href="#" class="parpadea ">
          LOADING
          <p>
            {"<"}The best site to purchase your games{"/>"}
          </p>
        </a>
        <div className="pacmanContainer">
          <PacmanLoader
            className="pacman"
            size={100}
            color={"#FFFFFF"}
            loading={true}
          />
        </div>
      </div>
    </>
  );
};

export default LoadingContainer;
