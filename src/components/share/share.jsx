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
import CodeIcon from '@mui/icons-material/Code';
import { useState } from "react";

function share({ setPosts }) {

    const { register, handleSubmit } = useForm();

    const [stateafficherInputCodeS, setStateafficherInputCode] = useState(false);

    const afficherInputCode = () => {
        setStateafficherInputCode(!stateafficherInputCodeS)
    }

    const { token, user } = useAuth()

    const submit = (data) => {
        if (data.description != '') {
            console.log(data)
            createNewPost(token, data.description, data.code, "f78529c9-084f-4cf3-9117-251afa9e2dd9", user.id).then((resp) => {
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
                        {...register('description', { required: "required" })}
                    />
                </div>
                <hr className="shareHr" />
                <textarea className="inputForCodes" placeholder="Coler votre code ici" type="textfield" style={{ display: stateafficherInputCodeS ? 'block' : 'none' }} {...register('code')} />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <CodeIcon htmlColor="tomato" className="shareIcon" onClick={afficherInputCode} />
                            <span className="shareOptionText" onClick={afficherInputCode}> Demander de l'aide dans des codes</span>
                        </div>
                    </div>
                    <Button className="shareButton" onClick={handleSubmit(submit)} variant="outlined" color="success">Publier</Button>
                </div>
            </div>
        </div>
    )
}

export default share