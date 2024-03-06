import "./rightbar.css"


function rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/pdp/costhuntLogo.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>C2E</b> et <b>3 autres groupes</b> organisent un évènement ajourd'hui</span>
        </div>
        <img src="assets/other/cercleEtude.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Canaux actifs</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/pdp/costhuntLogo.png" alt="" className="rightbarProfileImg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarUsername">Club d'entraide</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/pdp/costhuntLogo.png" alt="" className="rightbarProfileImg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarUsername">Club de Logiciel Libre et Linux</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/pdp/costhuntLogo.png" alt="" className="rightbarProfileImg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarUsername">L3 GB Groupe 2</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="assets/pdp/costhuntLogo.png" alt="" className="rightbarProfileImg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarUsername">Club de danse</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default rightbar