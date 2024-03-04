import axios from "axios";

const http = axios.create({
  baseURL: "https://api.github.com/users/muyassard",
});
const userData = () => {
  http
    .get("")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
// userData();
const Main: React.FC = () => {
  return (
    <>
      <div className="h-[130px] relative text-white">
        <svg
          className="absolute -z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#79E0EE"
            fill-opacity="1"
            d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,192C672,203,768,181,864,176C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className=" flex pt-5 items-center justify-around text-white font-bold text-3xl">
          <div className="">Muyassar</div>
          <div className="">Frontend Dev</div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="text-[#98EECC] text-3xl font-bold">
            Hello I'm Muyassar
          </div>
          <div className="text-[#79E0EE] text-4xl">Frontend Developer</div>
        </div>
      </div>
    </>
  );
};

export default Main;
