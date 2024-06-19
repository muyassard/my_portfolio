import React from 'react';
import { FaLocationArrow, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';

export const Header: React.FC = () => {
  return (
    <div id="home" className=" section  flex md:flex-wrap md:mt-40 items-center  justify-around">
      <div className=" flex flex-col gap-5" data-aos="fade-right">
        <div className="lg:text-2xl text-5xl text-[#79E0EE]">
          <div className="flex gap-2">
            <div className="">Hi </div>
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/Bharath-designer/bharath-designer/main/assets/wave.gif"
              alt=""
            />
          </div>
          I'm Muyassar <br />
          Frontend Developer <br />
        </div>
        <div className="lg:text-lg text-xl text-[#79E0EE]">
          My name is Muyassar. I am 19 years old <br /> and I live in Tashkent
        </div>
        <span className="text-[#79E0EE] display hover:text-black cursor-pointer">
          <FaPhoneAlt />
          +998 90 328 09 38
        </span>
        <span className="text-[#79E0EE] display hover:text-black cursor-pointer">
          <FaMailBulk />
          <a href="mailto:muyassarsolijonova@gmail.com">Send email</a>
        </span>
        <span className="text-[#79E0EE] display hover:text-black cursor-pointer">
          <FaLocationArrow />
          Tashkent
        </span>
      </div>
      <div className="" data-aos="fade-left">
        <img
          className="w-[400px] rounded-full"
          src="https://camo.githubusercontent.com/e7deff99a9dfda9b517a209dffa8eb00716dd1ae29b292ea64417ea66399d3a4/68747470733a2f2f696d672e6672656570696b2e636f6d2f667265652d766563746f722f796f756e672d776f6d616e2d757365732d636f6d70757465722d776f726b2d7265647563652d696e66656374696f6e5f313135302d33343938352e6a70673f773d37343026743d73743d313730383538363732307e6578703d313730383538373332307e686d61633d38383436653636616631386339303966383834376138326265633766623635356165313237333430336131636464653435663465313663613564383465623036"
          alt=""
        />
      </div>
    </div>
  );
};
