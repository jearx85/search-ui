import React, {useState} from 'react'

export default function Card({ uniqueData, handleFilterChange, resultados, offcanvas = ""  }) {

  const [selectedExtensions, setSelectedExtensions] = useState(null)

  function handleCheck(extension){

    if(selectedExtensions === extension){
      setSelectedExtensions(null)
    }else{
      setSelectedExtensions(extension)
    }
}

const filteredExtensions = selectedExtensions ? [selectedExtensions] : uniqueData

  return (
    <div>
        {filteredExtensions.map((item, index) => (
        <div className="form-check" key={index}>
          <input
            className="form-check-input"
            type="checkbox"
            name="filtrar"
            data-bs-dismiss= {offcanvas}
            value={item}
            id={item}
            checked={selectedExtensions === item}
            onChange={(e) =>{
              handleFilterChange(e, uniqueData[index])
              handleCheck(item)
              }
            }
          />
          <div className="d-flex justify-content-between">
            <label
              className="form-check-label"
              htmlFor={item}
            >
              {item}
            </label>
            <label className="check-label" htmlFor={item.Extensión}>
              {resultados[item]}
            </label>
          </div>
        </div>
      ))}
      </div>
  )


  // return (
  //   <div>
  //       {uniqueData.map((item, index) => (
  //       <div className="form-check" key={index}>
  //         <input
  //           className="form-check-input"
  //           type="checkbox"
  //           name="filtrar"
  //           data-bs-dismiss= {offcanvas}
  //           value={uniqueData[index]}
  //           id={item.Extensión}
  //           checked={selectedFilters[item.Extensión]}
  //           onChange={(e) =>{
  //             handleFilterChange(e, uniqueData[index])
  //             }
  //           }
  //         />
  //         <div className="d-flex justify-content-between">
  //           <label
  //             className="form-check-label"
  //             htmlFor={item.Extensión}
  //           >
  //             {uniqueData[index]}
  //           </label>
  //           <label className="check-label" htmlFor={item.Extensión}>
  //             {resultados[item]}
  //           </label>
  //         </div>
  //       </div>
  //     ))}
  //     </div>
  // )
}

// import React, { useState } from 'react';

// export default function Card({ uniqueData, selectedFilters, handleFilterChange, resultados, offcanvas = "" }) {
//   const [hiddenFilters, setHiddenFilters] = useState(selectedFilters);
//   const [isCheck , setCheck] = useState(false);
//   let newHiddenFilters = { ...hiddenFilters };

//   const handleCheckboxChange = (e, index) => {
//     newHiddenFilters[uniqueData[index]] = e.target.checked;
//     if(e.target.checked){
//       console.log("checked");
//     }
//     // console.log(newHiddenFilters)
//     setHiddenFilters(newHiddenFilters);
//     handleFilterChange(e, uniqueData[index]);
//     setCheck(true);

//   };

//   return (
//     <div>
//       {uniqueData.map((item, index) => {

//         return (
//           <div className="form-check" key={index} >
//             <input
//               className="form-check-input"
//               type="radio"
//               name="filtrar"
//               data-bs-dismiss={offcanvas}
//               value={uniqueData[index]}
//               id={item.Extensión}
//               checked={selectedFilters[item.Extensión]}
//               onChange={(e) => {
//                 handleCheckboxChange(e, index);
               
//               }
              
//               }
//             />
//             <div className="d-flex justify-content-between">
//               <label className="form-check-label" htmlFor={item.Extensión}>
//                 {uniqueData[index]}
//               </label>
//               <label className="check-label" htmlFor={item.Extensión}>
//                 {resultados[item]}
//               </label>
//             </div>
//           </div>
//         );
      
//     })}
//   </div>
//   );



  // return(
  //   <div>
  //      { isCheck ? (
            
  //           Object.keys(newHiddenFilters).map((item, index) => {
  //             return(
  //                     <div className="form-check" key={index} >
  //                         <input
  //                           className="form-check-input"
  //                           type="checkbox"
  //                           name="filtrar"
  //                           data-bs-dismiss={offcanvas}
  //                           value={uniqueData[index]}
  //                           id={item}
  //                           checked={selectedFilters[item]}
  //                           onChange={(e) => handleCheckboxChange(e, index)}
  //                         />
  //                         <div className="d-flex justify-content-between">
  //                           <label className="form-check-label" htmlFor={item}>
  //                             {item}
  //                           </label>
  //                           <label className="check-label" htmlFor={item}>
  //                             {resultados[item]}
  //                           </label>
  //                         </div> 
  //                     </div>
  //                   )
  //           })
  //      ):(
  //           uniqueData.map((item, index) =>{
  //             return(
  //             <div className="form-check" key={index} display = "none">
  //                 <input
  //                   className="form-check-input"
  //                   type="checkbox"
  //                   name="filtrar"
  //                   data-bs-dismiss={offcanvas}
  //                   value={uniqueData[index]}
  //                   id={item.Extensión}
  //                   checked={selectedFilters[item.Extensión]}
  //                   onChange={(e) => handleCheckboxChange(e, index)}
  //                 />
  //                 <div className="d-flex justify-content-between">
  //                   <label className="form-check-label" htmlFor={item.Extensión}>
  //                     {uniqueData[index]}
  //                   </label>
  //                   <label className="check-label" htmlFor={item.Extensión}>
  //                     {resultados[item]}
  //                   </label>
  //                 </div> 
  //              </div>
  //             )
  //           })
  //         )   
  //       }
  //   </div>
  // );
// }
