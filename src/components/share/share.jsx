import "./share.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Label } from "@mui/icons-material";
import { Button } from "@mui/material";

function share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/pdp/costhuntLogo.png" alt="" className="shareProfileImg" />
                <input type="text"
                    placeholder="Quoi de neuf, Cost Hunt?"
                    className="shareInput"
                />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <InsertPhotoIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Photo or video</span>
                    </div>
                </div>
                <Button  className="shareButton" variant="outlined" color="success">Publier</Button>
            </div>
        </div>
    </div>
  )
}

export default share