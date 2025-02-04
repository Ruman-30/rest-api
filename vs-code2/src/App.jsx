import React, { useEffect, useState } from "react";
import axios from 'axios'



function App() {

  const [ isModalOpen, setIsModalOpen ] = React.useState(false);
  const [ newFileName, setNewFileName ] = React.useState("");
  const [files, setfiles] = useState([])
  const [currentfile, setcurrentfile] = useState(null)
  // const [getData, setgetData] = useState("") 

  function createNewFile() {
    setIsModalOpen(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/create", {
      fileName: newFileName,
      fileData: ""
    }).then((res)=>{
      getAllfiles()
    })
    setIsModalOpen(false)
    setNewFileName("")
  }
 function getAllfiles(){
  axios.get("http://localhost:3000/get-all").then((res)=>{
    setfiles(res.data)
  })
 }
function getAllFileData(fileName){
  axios.get("http://localhost:3000/read/" + fileName).then((res)=>{
     setgetData(res.data)
  })
}
// function updateFile(fileName, fileData){
//   axios.patch("http://localhost:3000/update/" + fileName,{
//     fileData
//   }).then((res)=>{
//     console.log(res.data);
    
//   })
// }
 useEffect(()=>{
  getAllfiles()
 },[])
  return (
    <div className="flex h-screen w-screen">
      <aside className="bg-gray-100 min-w-80 text-black p-4 flex flex-col">
        <div className="mb-4 text-xl flex justify-between items-center">
          <h3 className="font-semibold" >Explorer</h3>
          <i
            onClick={createNewFile}
            className="ri-add-line bg-blue-500 text-white p-0 px-1 rounded cursor-pointer"
          >+</i>
        </div>
        <ul>
         {files.map((file, index)=>{
            return <li
            onClick={()=>{
              getAllFileData(file)
            }}
            key={index} className="mb-2">
            <i className="ri-file-line mr-2"></i> {file}
          </li>

         })}
        </ul>
      </aside>
      <main className="flex-1 bg-gray-300 text-black">
        <textarea
          className="w-full h-full border-none p-2 outline-none "
          placeholder="Edit your file here..."
           value={currentfile}
          onChange={(e)=>{
            setcurrentfile(e.target.value)
          }}
        >{currentfile}</textarea>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
          <div className="p-4 rounded shadow-lg bg-gray-400">
            <h2 className="text-xl mb-4">Create New File</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                className="border p-2 mb-4 w-full rounded-md outline-none"
                placeholder="Enter file name"
                required
              />
              <button
                type="submit"
                className="text-white w-fit cursor-pointer p-2 rounded"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
