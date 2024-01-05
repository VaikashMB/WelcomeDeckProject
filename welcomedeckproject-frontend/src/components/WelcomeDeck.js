// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import logo from "../images/logo.png"
// import hometown1 from "../images/hometown1.webp"
// import education1 from "../images/education1.png"
// import experience1 from "../images/experience1.png"
// import hobbies1 from "../images/hobbies1.png"
// import employee1 from "../images/employee1.webp"
// import skills1 from "../images/skills1.png"
// import quote1 from "../images/quote1.webp"
// import phone1 from "../images/phone1.webp"


// function WelcomeDeck() {
//   const { empId } = useParams();
//   const [employee, setEmployee] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:8080/employee/getById/${empId}`)
//       .then(response => response.json())
//       .then(data => { console.log(data); setEmployee(data); })
//       .catch(error => console.error("Error fetching employee:", error));
//   }, []); {
//     employee !== null ? (
//       <div className="mt-4" >
//         <div className='list-row'>
//           <h1 className="mb-4">{employee.name}'s Welcome Deck</h1>
//           <Link to='/employeelist' className='decks'>Back to Employee List</Link>
//         </div>

//         <div className='mainpage' style={{ margin: '30px', padding: '30px' }} >
//           <h1 className='title'>Welcome to Tarento</h1>

//           <div className='row row1'>
//             <div className='col hometown'>
//               <div className='titles nametest'>
//                 <div>
//                   <img className='namelogo' src={hometown1} alt='home'></img>
//                 </div>
//                 <div>
//                   <h2>HomeTown</h2>
//                   <p>{employee.hometown} </p>
//                 </div>
//               </div>
//             </div>
//             <div className='col education'>
//               <div className='titles nametest'>
//                 <div>
//                   <img className='namelogo' src={education1} alt='education'></img>
//                 </div>
//                 <div>
//                   <h2>Education</h2>
//                   <p>{employee.educationQualification} </p>
//                 </div>
//               </div>
//             </div>
//             <div className='col experience'>
//               <div className='titles nametest'>
//                 <div>
//                   <img className='namelogo' src={experience1} alt='experience'></img>
//                 </div>
//                 <div>
//                   <h2>Experience</h2>
//                   <p>{employee.experience} </p>
//                 </div>
//               </div>
//             </div>
//             <div className='col freetime'>
//               <div className='titles nametest'>
//                 <div>
//                   <img className='namelogo' src={hobbies1} alt='hobbies'></img>
//                 </div>
//                 <div>
//                   <h2>Hobbies</h2>
//                   <p>{employee.hobbies} </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='row row3'>
//             <div className='col col2 titles nametest'>
//               <div className='imagebox'>
//                 <img className='imagelogo' src={employee1} alt='business'></img>
//               </div>
//               <div className='sidebox'>
//                 <h2 className='text2'>Name: <span className='namesize'>{employee.name}</span> </h2>
//                 <h2 className='text2'>Employee Id: <span>{employee.emp_id}</span> </h2>
//               </div>
//             </div>
//             <div className='col col2 titles nametest'>
//               <div className='imagebox'>
//                 <img className='imagelogo' src={skills1} alt='entrepreneur'></img>

//               </div>
//               <div className='sidebox'>
//                 <h2 className='text2'>Manager: <span className='namesize'>{employee.assignedManager}</span> </h2>
//                 <h2 className='text2'>IBU: <span>{employee.assignedIBU}</span> </h2>
//                 <h2 className='text2'>Skills: <span>{employee.skills}</span> </h2>
//               </div>
//             </div>
//           </div>

//           <div className='row row4'>
//             <div className='col col3 titles nametest'>
//               <div>
//                 <img className='namelogo' src={quote1} alt='quote'></img>
//               </div>
//               <div>
//                 <h2>The quote that fuels me:</h2>
//                 <p>"{employee.favouriteQuote}" </p>
//               </div>
//             </div>
//             <div className='col col3 titles nametest'>
//               <div>
//                 <img className='namelogo' src={phone1} alt='phone'></img>
//               </div>
//               <div>
//                 <h2>I can be reached at:</h2>
//                 <p><span className='dark'>phone - </span> {employee.contact} <br />
//                   <span className='dark'>email - </span>{employee.email} </p>
//               </div>
//             </div>
//             <div className='col col3 titles'>
//               <h2>If I wasn't in my current profession, I would have been:</h2>
//               <p>{employee.alternateProfession} </p>
//             </div>
//           </div>

//           <h2 className='finaltitle'>Enjoy Life At Tarento!</h2>
//           <img className='logo' src={logo} alt='logo'></img>
//         </div >

//       </div >) : <p>Loading</p>
//   }

//   useEffect(() => {
//     fetch(`http://localhost:8080/employee/getById/${empId}`)
//       .then(response => response.json())
//       .then(data => { console.log(data); setEmployee(data); })
//       .catch(error => console.error("Error fetching employee:", error));
//   }, [empId]);



//   return (
//     <>
//       {
//         employee !== null ? (
//           <div className=" mt-4" >
//             <div className='list-row'>
//               <h1 className="mb-4">{employee.name}'s Welcome Deck</h1>
//               <Link to='/employeelist' className='decks'>Back to Employee List</Link>
//             </div>

//             <div className='mainpage' style={{ margin: '30px', padding: '30px' }} >
//               <h1 className='title'>Welcome to Tarento</h1>

//               <div className='row row1'>
//                 <div className='col hometown'>
//                   <div className='titles nametest'>
//                     <div>
//                       <img className='namelogo' src={hometown1} alt='home'></img>
//                     </div>
//                     <div>
//                       <h2>HomeTown</h2>
//                       <p>{employee.hometown} </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='col education'>
//                   <div className='titles nametest'>
//                     <div>
//                       <img className='namelogo' src={education1} alt='education'></img>
//                     </div>
//                     <div>
//                       <h2>Education</h2>
//                       <p>{employee.educationQualification} </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='col experience'>
//                   <div className='titles nametest'>
//                     <div>
//                       <img className='namelogo' src={experience1} alt='experience'></img>
//                     </div>
//                     <div>
//                       <h2>Experience</h2>
//                       <p>{employee.experience} </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='col freetime'>
//                   <div className='titles nametest'>
//                     <div>
//                       <img className='namelogo' src={hobbies1} alt='hobbies'></img>
//                     </div>
//                     <div>
//                       <h2>Hobbies</h2>
//                       <p>{employee.hobbies} </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className='row row3'>
//                 <div className='col col2 titles nametest'>
//                   <div className='imagebox'>
//                     <img className='imagelogo' src={employee1} alt='business'></img>
//                   </div>
//                   <div className='sidebox'>
//                     <h2 className='text2'>Name: <span className='namesize'>{employee.name}</span> </h2>
//                     <h2 className='text2'>Employee Id: <span>{employee.emp_id}</span> </h2>
//                   </div>
//                 </div>
//                 <div className='col col2 titles nametest'>
//                   <div className='imagebox'>
//                     <img className='imagelogo' src={skills1} alt='entrepreneur'></img>

//                   </div>
//                   <div className='sidebox'>
//                     <h2 className='text2'>Manager: <span className='namesize'>{employee.assignedManager}</span> </h2>
//                     <h2 className='text2'>IBU: <span>{employee.assignedIBU}</span> </h2>
//                     <h2 className='text2'>Skills: <span>{employee.skills}</span> </h2>
//                   </div>
//                 </div>
//               </div>

//               <div className='row row4'>
//                 <div className='col col3 titles nametest'>
//                   <div>
//                     <img className='namelogo' src={quote1} alt='quote'></img>
//                   </div>
//                   <div>
//                     <h2>The quote that fuels me:</h2>
//                     <p>"{employee.favouriteQuote}" </p>
//                   </div>
//                 </div>
//                 <div className='col col3 titles nametest'>
//                   <div>
//                     <img className='namelogo' src={phone1} alt='phone'></img>
//                   </div>
//                   <div>
//                     <h2>I can be reached at:</h2>
//                     <p><span className='dark'>phone - </span> {employee.contact} <br />
//                       <span className='dark'>email - </span>{employee.email} </p>
//                   </div>
//                 </div>
//                 <div className='col col3 titles'>
//                   <h2>If I wasn't in my current profession, I would have been:</h2>
//                   <p>{employee.alternateProfession} </p>
//                 </div>
//               </div>

//               <h2 className='finaltitle'>Enjoy Life At Tarento!</h2>
//               <img className='logo' src={logo} alt='logo'></img>
//             </div >

//           </div >) : <p>Loading</p>
//       }
//     </>
//   );
// }

// export default WelcomeDeck;



// .........


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import logo from "../images/logo.png"
import hometown1 from "../images/hometown1.webp"
import education1 from "../images/education1.png"
import experience1 from "../images/experience1.png"
import hobbies1 from "../images/hobbies1.png"
import employee1 from "../images/employee1.webp"
import skills1 from "../images/skills1.png"
import quote1 from "../images/quote1.webp"
import phone1 from "../images/phone1.webp"
import hometown2 from "../images/hometown2.png"
import education2 from "../images/education2.png"
import experience2 from "../images/experience2.webp"
import hobbies2 from "../images/hobbies2.png"
import employee2 from "../images/employee2.png"
import skills2 from "../images/skills2.png"
import quote2 from "../images/quote2.webp"
import phone2 from "../images/phone2.webp"
import DownloadButton from './DownloadButton';

function WelcomeDeck() {
  const { empId } = useParams();
  const [employee, setEmployee] = useState(null);
  const [currentTemplate, setCurrentTemplate] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8080/employee/getById/${empId}`)
      .then(response => response.json())
      .then(data => setEmployee(data))
      .catch(error => console.error("Error fetching employee:", error));
  }, [empId]);

  const handleTemplateChange = () => {
    setCurrentTemplate(currentTemplate === 1 ? 2 : 1);
  };

  const getTemplate = () => {
    if (currentTemplate === 1) {
      return (
        <div className='mainpage' style={{ margin: '30px', padding: '30px' }}>
          <h1 className='title'>Welcome to Tarento</h1>

          <div className='row row1'>
            <div className='col hometown'>
              <div className='titles nametest'>
                <div>
                  <img className='namelogo' src={hometown1} alt='home'></img>
                </div>
                <div>
                  <h2>HomeTown</h2>
                  <p>{employee.hometown} </p>
                </div>
              </div>
            </div>
            <div className='col education'>
              <div className='titles nametest'>
                <div>
                  <img className='namelogo' src={education1} alt='education'></img>
                </div>
                <div>
                  <h2>Education</h2>
                  <p>{employee.educationQualification} </p>
                </div>
              </div>
            </div>
            <div className='col experience'>
              <div className='titles nametest'>
                <div>
                  <img className='namelogo' src={experience1} alt='experience'></img>
                </div>
                <div>
                  <h2>Experience</h2>
                  <p>{employee.experience} </p>
                </div>
              </div>
            </div>
            <div className='col freetime'>
              <div className='titles nametest'>
                <div>
                  <img className='namelogo' src={hobbies1} alt='hobbies'></img>
                </div>
                <div>
                  <h2>Hobbies</h2>
                  <p>{employee.hobbies} </p>
                </div>
              </div>
            </div>
          </div>

          <div className='row row3'>
            <div className='col col2 titles nametest'>
              <div className='imagebox'>
                <img className='imagelogo' src={employee1} alt='business'></img>
              </div>
              <div className='sidebox'>
                <h2 className='text2'>Name: <span className='namesize'>{employee.name}</span> </h2>
                <h2 className='text2'>Employee Id: <span>{employee.emp_id}</span> </h2>
              </div>
            </div>
            <div className='col col2 titles nametest'>
              <div className='imagebox'>
                <img className='imagelogo' src={skills1} alt='entrepreneur'></img>

              </div>
              <div className='sidebox'>
                <h2 className='text2'>Manager: <span className='namesize'>{employee.assignedManager}</span> </h2>
                <h2 className='text2'>IBU: <span>{employee.assignedIBU}</span> </h2>
                <h2 className='text2'>Skills: <span>{employee.skills}</span> </h2>
              </div>
            </div>
          </div>

          <div className='row row4'>
            <div className='col col3 titles nametest'>
              <div>
                <img className='namelogo' src={quote1} alt='quote'></img>
              </div>
              <div>
                <h2>The quote that fuels me:</h2>
                <p>"{employee.favouriteQuote}" </p>
              </div>
            </div>
            <div className='col col3 titles nametest'>
              <div>
                <img className='namelogo' src={phone1} alt='phone'></img>
              </div>
              <div>
                <h2>I can be reached at:</h2>
                <p><span className='dark'>phone - </span> {employee.contact} <br />
                  <span className='dark'>email - </span>{employee.email} </p>
              </div>
            </div>
            <div className='col col3 titles'>
              <h2>If I wasn't in my current profession, I would have been:</h2>
              <p>{employee.alternateProfession} </p>
            </div>
          </div>

          <h2 className='finaltitle'>Enjoy Life At Tarento!</h2>
          <img className='logo' src={logo} alt='logo'></img>
        </div>
      );
    } else {
      return (
        <div class='mainpage10'>

          <h1 class='title10'>Welcome to Tarento</h1>

          <div class='row10'>
            <div class='col10 hometown'>
              <div class='titles10 nametest'>
                <div>
                  <img className='namelogo' src={hometown2} alt='phone'></img>
                </div>
                <div>
                  <h2>HomeTown</h2>
                  <p>{employee.hometown} </p>
                </div>

              </div>
            </div>
            <div class='col10 education'>
              <div class='titles10 nametest'>
                <div>
                  <img className='namelogo' src={education2} alt='education'></img>
                </div>
                <div>
                  <h2>Education</h2>
                  <p>{employee.educationQualification} </p>
                </div>
              </div>
            </div>
            <div class='col10 experience'>
              <div class='titles10 nametest'>
                <div>
                  <img className='namelogo' src={experience2} alt='experience'></img>
                </div>
                <div>
                  <h2>Experience</h2>
                  <p>{employee.experience} </p>
                </div>
              </div>
            </div>
            <div class='col10 freetime'>
              <div class='titles10 nametest'>
                <div>
                  <img className='namelogo' src={hobbies2} alt='hobby'></img>
                </div>
                <div>
                  <h2>In my freetime, I enjoy</h2>
                  <p>{employee.hobbies} </p>
                </div>
              </div>
            </div>
          </div>

          <div class='row10'>
            <div class='col10 col2 titles10 nametest'>
              <div className='imagebox'>
                <img className='imagelogo' src={employee2} alt='name'></img>
              </div>
              <div>
                <h2 class='text20'>Name: <span className='temp2'>{employee.name}</span> </h2>
                <h2 class='text20'>Employee Id: <span className='temp2'>{employee.emp_id}</span> </h2>
              </div>
            </div>
            <div class='col10 col2 titles10 nametest'>
              <div className='imagebox'>
                <img className='imagelogo' src={skills2} alt='ibu'></img>
              </div>
              <div>
                <h2 class='text20'>Manager: <span className='temp2'>{employee.assignedManager}</span> </h2>
                <h2 class='text20'>IBU: <span className='temp2'>{employee.assignedIBU}</span> </h2>
                <h2 class='text20'>Skills: <span className='temp2'>{employee.skills}</span> </h2>
              </div>
            </div>
          </div>

          <div class='row10'>
            <div class='col10 col3 titles10 nametest'>
              <div>
                <img className='namelogo' src={quote2} alt='quote'></img>
              </div>
              <div>
                <h2>The quote that fuels me:</h2>
                <p>"{employee.favouriteQuote}" </p>
              </div>
            </div>
            <div class='col10 col3 titles10 nametest'>
              <div>
                <img className='namelogo' src={phone2} alt='contact'></img>
              </div>
              <div>
                <h2>I can be reached at:</h2>
                <p>phone - {employee.contact} <br />
                  email -{employee.email} </p>
              </div>
            </div>
            <div class='col10 col3 titles10'>
              <h2>If I wasn't in my current profession, I would have been:</h2>
              <p>{employee.alternateProfession} </p>
            </div>
          </div>

          <h2 class='finaltitle10'>Enjoy Life At Tarento!</h2>
          <img className='logo2' src={logo} alt='logo'></img>

        </div>
      );
    }
  };

  return (
    <>
      {employee !== null ? (
        <div className="mt-4">
          <div className='list-row'>
            {/* <h1 className="mb-4">{employee.name}'s Welcome Deck</h1> */}
            <Link to='/employeelist' className='decks'>Back to Employee List</Link>
            <button onClick={handleTemplateChange} className='decks ml-2'>Change Template</button>
            <DownloadButton employee={employee} />
          </div>

          {/* {getTemplate()} */}
          <div id={`captureContainer_${employee.emp_id}`}>
            {getTemplate()}
            {/* {templates[selectedTemplate - 1](employee)} */}
          </div>

        </div>

      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default WelcomeDeck;
