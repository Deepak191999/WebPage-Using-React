import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()

    /** 
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/deepak191999")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
*/


  const openGithubProfile = (event) => {
    event.preventDefault();
    window.open(data.html_url, "_blank");
  };

  return (
    <div className="text-center m-4  bg-gray-600 flex flex-wrap text-white  p-4 justify-center md:justify-between items-center">
      <div className=" sm:text-1xl md:text-2xl lg:text-3xl  xl:text-3xl ">Github Link={'> '}
      <a  className="hover:text-blue-400" href={data.html_url} onClick={openGithubProfile}>
        {data.html_url}
      </a> 
   
      </div>
      <div>
      <img src={data.avatar_url} alt="" width={200} className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56" />
      <div className="sm:text-1xl md:text-2xl lg:text-3xl  xl:text-3xl mt-2"> {data.name} </div> 
       </div>
    </div>
  );
}

export default Github;


//loader
export const githubInfoLoader = async()=>{
    //hum phle hi le kr a rhe hai cache memmory me rkhenge, jb cursor github pe jayega navigation vale pe
 const response = await   fetch("https://api.github.com/users/deepak191999")

 return response.json()    // ye abhi promise hai ,phr bhi return kr pa rhe hai
}