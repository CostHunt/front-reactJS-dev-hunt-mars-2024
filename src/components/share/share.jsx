import "./share.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Label } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { createNewPost } from "../../utils/post";
import { useAuth } from "../../providers/AuthProvider";

function share({ setPosts }) {

    const { register, handleSubmit } = useForm();

    const { token, user } = useAuth()

    const submit = (data) => {
        if (data.description != '') {
            console.log(data)
            createNewPost(token, data.description, "f78529c9-084f-4cf3-9117-251afa9e2dd9", "57f2b478-3441-4ebc-a34b-94a3e6f35102").then((resp) => {
                setPosts((p) => [resp.data, ...p])
            })
        }
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/pdp/costhuntLogo.png" alt="" className="shareProfileImg" />
                    <input type="text"
                        placeholder="Quoi de neuf, Cost Hunt?"
                        className="shareInput"
                        {...register('description')}
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <InsertPhotoIcon htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                    </div>
                    <Button className="shareButton" onClick={handleSubmit(submit)} variant="outlined" color="success">Publier</Button>
                </div>
            </div>
        </div>
    )
}

export default share