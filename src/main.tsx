import { Anchor, Button, Card } from 'antd';
import {
  FaDice,
  FaGithub,
  FaLocationArrow,
  FaMailBulk,
  FaPhoneAlt,
  FaTelegramPlane,
  FaTwitter
} from 'react-icons/fa';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

const http = axios.create({
  baseURL: 'https://api.github.com/users/muyassard/repos'
});
const Main: React.FC = () => {
  interface Repo {
    name: string;
    html_url: string;
  }

  const repos = useRef<HTMLDivElement>(null);
  const [repoList, setRepoList] = useState<Repo[]>([]);

  const tech = [
    './images/html.svg',
    './images/css.svg',
    './images/js.svg',
    './images/sass.svg',
    './images/bootstrap.svg',
    './images/types.svg',
    './images/react.svg',
    './images/tail.svg',
    './images/postman.svg',
    './images/ant-design.svg'
  ];

  useEffect(() => {
    http
      .get('')
      .then(response => {
        const res: Repo[] = response.data;
        console.log('data: ', res);
        setRepoList(res);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    repoList.forEach(repo => {
      console.log(repo);
      const repoElement = document.createElement('a');
      repoElement.className = 'bg-blue-300 p-5 border rounded-lg mr-10 cursor-pointer';
      repoElement.setAttribute('href', repo.html_url);
      repoElement.setAttribute('target', '_blank');
      repoElement.textContent = repo.name;
      // repos.current?.appendChild(repoElement);
      const doc = document.querySelector('.rfm-initial-child-container')!;
      doc.appendChild(repoElement);
    });
  }, [repoList]);

  return (
    <div className="pt-[.1px] ">
      <nav
        id="#"
        className="fixed flex-wrap gap-5 shadow-md flex py-5 px-16 md:px-5 z-50 w-full bg-white  items-center justify-between"
      >
        <div className="flex gap-2">
          <div
            className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-green-500
         to-indigo-400 inline-block bg-clip-text text-transparent"
          >
            muyassar
          </div>
          <img
            className="w-10 h-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/127185125?v=4"
            alt=""
          />
        </div>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'home',
              href: '#home',
              title: 'home'
            },
            {
              key: 'myTechStack',
              href: '#myTechStack',
              title: 'myTechStack'
            },
            {
              key: 'repos',
              href: '#repos',
              title: 'repos'
            },
            {
              key: 'projects',
              href: '#projects',
              title: 'projects'
            }
          ]}
        />

        <div className="flex items-center gap-10">
          <Button className="border-none bg-blue-400 text-white">
            <a type="tel" href="tel:+998903280938">
              Contact
            </a>
          </Button>
          <a target="_blank" href="https://github.com/muyassard">
            <FaGithub className="text-2xl" />
          </a>
          <a target="_blank" href="https://twitter.com/muyassar___19">
            <FaTwitter className="text-2xl" />
          </a>
          <a target="_blank" href="https://t.me/MDS328">
            <FaTelegramPlane className="text-2xl" />
          </a>
        </div>
      </nav>
      <div className="px-16 lg:px-5">
        <div id="home" className=" section  flex items-center  justify-around">
          <div className="  flex flex-col gap-5">
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
              Frontend Developer
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
          <div className="">
            <img
              className="w-[400px]"
              src="https://camo.githubusercontent.com/e7deff99a9dfda9b517a209dffa8eb00716dd1ae29b292ea64417ea66399d3a4/68747470733a2f2f696d672e6672656570696b2e636f6d2f667265652d766563746f722f796f756e672d776f6d616e2d757365732d636f6d70757465722d776f726b2d7265647563652d696e66656374696f6e5f313135302d33343938352e6a70673f773d37343026743d73743d313730383538363732307e6578703d313730383538373332307e686d61633d38383436653636616631386339303966383834376138326265633766623635356165313237333430336131636464653435663465313663613564383465623036"
              alt=""
            />
          </div>
        </div>
        <div id="myTechStack" className="section flex flex-col justify-center   ">
          <div className="text-center font-bold text-4xl pb-10">My Tech Stack</div>
          <div className="flex items-center gap-24 md:flex-wrap">
            <div className="w-[600px] leading-loose text-3xl text-indigo-400 font-bold">
              My name is Muyassar <br /> I am 19 years old <br /> and I live in Tashkent
            </div>

            <div className="flex items-center gap-5 flex-wrap">
              {tech.map(tech => {
                return <img src={tech} alt="" />;
              })}{' '}
            </div>
          </div>
        </div>
        <div id="repos" className="">
          <div className="text-center font-bold text-4xl pb-5">My repos</div>
          <Marquee
            pauseOnHover
            speed={20}
            ref={repos}
            className="repos transition duration-700 ease-in-out"
          ></Marquee>
        </div>
        <div id="projects" className="transition-all section flex flex-col justify-center">
          <div className="text-center font-bold text-4xl pb-5">My deployed project</div>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://dice-game-app-v1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                title="Dice game 🎲"
                className="shadow-lg hover:bg-cyan-50"
                style={{ width: 300 }}
              >
                <p>React</p>
                <p>Tailwind</p>
              </Card>
            </a>
            <a
              href="https://unrivaled-bunny-7b4c8f.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                title="figma in react"
                className="shadow-lg hover:bg-cyan-50"
                style={{ width: 300 }}
              >
                <p> React</p>
                <p>Tailwind</p>
              </Card>
            </a>
            <a href="https://sudoku-app-v1.netlify.app/" target="_blank" rel="noopener noreferrer">
              <Card title="sudoku" className="shadow-lg hover:bg-cyan-50" style={{ width: 300 }}>
                <p> React</p>
                <p>Tailwind</p>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
