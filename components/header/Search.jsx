
export default function Search() {
  return (
    <div
    className="search d-flex  align-items-center flex-row-reverse justify-content-end col-5 col-sm-5 col-md-5"
    dir="rtl"
  >
    <div className="no-result"></div>
    <div id="autosugestion" className="">
      <div className="search-box">
        <input
          type="text"
          autoComplete="off"
          aria-autocomplete="list"
          aria-activedescendant=""
          aria-controls="autosuggest-autosuggest__results"
          id="autosuggest__input"
          placeholder="جستجو در میان هزاران محصول..."
          defaultValue=""
          className="search-input"
        ></input>
      </div>
      <div
        id="autosuggest-autosuggest__results"
        className="autosuggest__results-container"
      ></div>
    </div>
    <button className="btn btn-light">
      {" "}
      <span className="material-icons">search</span>
    </button>
  </div>
  )
}
