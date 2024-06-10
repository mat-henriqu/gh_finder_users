/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserProps } from '../types/user'
import { MdLocationPin } from 'react-icons/md'
import classes from './User.module.css'

const User = ({
    login,
    avatar_url,
    followers,
    following,
    location,
    html_url
}: UserProps) => {
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location &&
                <p className={classes.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            }
            <div>
                <div>
                    <p>Seguidores</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Seguindo</p>
                    <p>{following}</p>
                </div>
            </div>
            <a href={`${html_url}?tab=repositories`} target="_blank">
                Visitar Perfil
            </a>
        </div>
    )
}

export default User