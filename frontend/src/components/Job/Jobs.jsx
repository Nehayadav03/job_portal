import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axiosInstance from "../../axiosInstance"; // ✅ use axiosInstance

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axiosInstance.get("/job/getall");
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  if (!isAuthorized) {
    navigateTo("/");
  }

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element) => (
              <div className="card" key={element._id}>
                <p>{element.title}</p>
                <p>{element.category}</p>
                <p>{element.country}</p>
                <Link to={`/job/${element._id}`}>Job Details</Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;






// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Context } from "../../main";
// import axiosInstance from "../../axiosInstance";

// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const { isAuthorized } = useContext(Context);
//   const navigateTo = useNavigate();

//   useEffect(() => {
//     if (!isAuthorized) navigateTo("/");

//     const fetchJobs = async () => {
//       try {
//         const { data } = await axiosInstance.get("/job/getall");
//         setJobs(data.jobs); // ✅ assign the jobs array directly
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };
//     fetchJobs();
//   }, [isAuthorized, navigateTo]);

//   return (
//     <section className="jobs page">
//       <div className="container">
//         <h1>ALL AVAILABLE JOBS</h1>
//         <div className="banner">
//           {jobs.length > 0 ? (
//             jobs.map((element) => (
//               <div className="card" key={element._id}>
//                 <p>{element.title}</p>
//                 <p>{element.category}</p>
//                 <p>{element.country}</p>
//                 <Link to={`/job/${element._id}`}>Job Details</Link>
//               </div>
//             ))
//           ) : (
//             <p>No jobs found.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Jobs;




