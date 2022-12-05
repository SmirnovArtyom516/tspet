import React, { useEffect, FC  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchPics} from '../../redux/actions/picSagaAction'
import './NavBar.scss'

const NavBar: FC = () => {
    const picture = useSelector((store:any) => store.PicsSaga)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchPics(1))
    }, [])
    console.log(picture);
    
    
  return (
    <>
<input type="checkbox" id="burger-toggle"/>
<label htmlFor="burger-toggle" className="burger-menu">
  <div className="line"></div>
  <div className="line"></div>
  <div className="line"></div>
</label>
<div className="menu">
  <div className="menu-inner">
    <ul className="menu-nav">
      <li className="menu-nav-item"><a className="menu-nav-link" href="#"><span>
            <div>Home</div>
          </span></a></li>
      <li className="menu-nav-item"><a className="menu-nav-link" href="#"><span>
            <div>About</div>
          </span></a></li>
      <li className="menu-nav-item"><a className="menu-nav-link" href="#"><span>
            <div>Service</div>
          </span></a></li>
      <li className="menu-nav-item"><a className="menu-nav-link" href="#"><span>
            <div>Team</div>
          </span></a></li>
    </ul>
    <div className="gallery">
      <div className="title">
        <p>Sora Gallery</p>
      </div>
      <div className="images">
        <a className="image-link" href="/Evangelion">
          <div className="image" data-label="Evangelion †"><img src="https://w.wallhaven.cc/full/28/wallhaven-28k99x.jpg" alt=""/></div>
        </a>
        <a className="image-link" href="#">
          <div className="image" data-label="Sun"><img src="https://sun9-43.userapi.com/impf/c834203/v834203729/18d7ab/JNLK33LMWh8.jpg?size=1280x905&quality=96&sign=2fd2a5128f7d72e03fa99106824ec555&type=album" alt=""/></div>
        </a>
        <a className="image-link" href="#">
          <div className="image" data-label="Tree"><img src="https://i.waifu.pics/WMTQpNf.jpg" alt=""/></div>
        </a>
        <a className="image-link" href="#">
          <div className="image" data-label="Sky"><img src={picture} alt=""/></div>
        </a>
      </div>
    </div>
  </div>
</div>
</>
  )
}


export default NavBar;
