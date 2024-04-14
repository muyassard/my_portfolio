import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
interface Repo {
  name: string;
  html_url: string;
}
const http = axios.create({
  baseURL: 'https://api.github.com/users/muyassard/repos'
});

export const Repos: React.FC = () => {
  const [repoList, setRepoList] = useState<Repo[]>([]);

  useEffect(() => {
    http
      .get('')
      .then(response => {
        const res: Repo[] = response.data;
        setRepoList(res);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    repoList.forEach(repo => {
      const repoElement = document.createElement('a');
      repoElement.className =
        'bg-gradient-to-r from-cyan-200 to-blue-200  shadow-lg p-5  rounded-lg mr-10 cursor-pointer';
      repoElement.setAttribute('href', repo.html_url);
      repoElement.setAttribute('target', '_blank');
      repoElement.textContent = repo.name;
      const doc = document.querySelector('.rfm-initial-child-container')!;
      doc.appendChild(repoElement);
    });
  }, [repoList]);

  return (
    <div id="repos" className="   flex flex-col justify-center ">
      <div className="text-center font-bold text-4xl mb-20">My repos</div>
      <Marquee
        pauseOnHover
        speed={20}
        className="repos transition duration-700 ease-in-out"
      ></Marquee>
    </div>
  );
};
