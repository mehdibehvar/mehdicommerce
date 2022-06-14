
export default function LeaveComment() {
  return (
    <div className="container opinion-wrapper">
    <div className="row">
      <div className="col-sm-12 ">
        <div className="opinion-header bg-success text-white p-2 rounded mb-4 mt-3">
          <i className="fa fa-comments mr-2" aria-hidden="true"></i>
          <span>دیدگاه خود را ارسال نمایید.</span>
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="نام و نام خانوادگی..."
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="password"
                className="form-control"
                placeholder="ایمیل معتبر..."
              />
            </div>
          </div>
          <div>
            <textarea
              className="w-100 p-2"
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="دیدگاه شما ..."
            ></textarea>
          </div>
          <div className="text-right mt-3">
            <button type="submit" className="btn btn-primary btn-sm ">
              ارسال دیدگاه
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
