import { useRouter } from "next/router";
import { useState } from "react"

export default function Search() {
  const router=useRouter()
  const [search,setSearch]=useState("");
  const handleSearch=(e)=>{
    e.preventDefault();
   router.push(`/searched/?params=${search}`)
  }
  return (
    <div
    className="search col-7 col-sm-7 col-md-5 d-flex  align-items-center flex-row-reverse justify-content-end "
  
  >
    <div id="autosugestion" className="w-100">
      <form onSubmit={handleSearch} className="search-box d-flex">
      <button  type="submit" className="search-button btn btn-light bg-primary bg-opacity-10">
      <span className="material-icons">search</span>
    </button>
        <input
         value={search}
        onChange={(e)=>setSearch(e.target.value)}
          type="text"
          aria-autocomplete="list"
          id="autosuggest__input"
          placeholder="جستجو در میان محصولات..."
          className="search-input"
        ></input>
     
      </form>
    </div>
  
  </div>
  )
}
