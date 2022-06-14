
export default function TabMenu() {
  return (
    <ul
    className="nav nav-tabs border-0 sp-description"
    id="myTab"
    role="tablist"
  >
    <li className="nav-item " role="presentation">
      <a
        className="nav-link active "
        id="home-tab"
        data-toggle="tab"
        href="#home"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        <i className="fas fa-info"></i>
        توضیحات
      </a>
    </li>
    <li className="nav-item" role="presentation">
      <a
        className="nav-link"
        id="profile-tab"
        data-toggle="tab"
        href="#profile"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
      >
        مشخصات فنی
      </a>
    </li>
    <li className="nav-item" role="presentation">
      <a
        className="nav-link"
        id="contact-tab"
        data-toggle="tab"
        href="#contact"
        role="tab"
        aria-controls="contact"
        aria-selected="false"
      >
        نظرات و پرسش و پاسخ
      </a>
    </li>
  </ul>
  )
}
