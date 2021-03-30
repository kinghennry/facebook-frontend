import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SupervisedUserCircleIcon  from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';
import { Avatar,IconButton } from '@material-ui/core';
import "../css/Header.css"
import {useStateValue} from "../StateProvider"
const Header = () => {
     const [{user},dispatch]= useStateValue()
    return (
        <div className="header fx sb">
            <div className="header__left fx se">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                <div className="header__input fx ai">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"/>
                    </div>
            </div>
            <div className="header__middle fx jc">
                <div className="header__option fx ai  header__option--active">
                 <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option fx ai">
                 <SupervisedUserCircleIcon fontSize="large"/>
                </div>
                <div className="header__option fx ai">
                 <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
            </div>
            <div className="header__right fx">
                 <IconButton>
                    <AddIcon/>
                 </IconButton> 
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>

                 <div className="header__info fx ai">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Header
