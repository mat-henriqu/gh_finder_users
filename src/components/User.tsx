import { UserProps } from '../types/user';
import { MdLocationPin, MdBusiness, MdEmail, MdWeb, MdCalendarToday } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import classes from './User.module.css';

const User = ({
    login,
    avatar_url,
    name,
    bio,
    followers,
    following,
    location,
    public_repos,
    public_gists,
    company,
    blog,
    email,
    twitter_username,
    created_at,
    html_url
}: UserProps) => {
    const formattedBio = bio?.replace(/\r\n|\r|\n/g, '<br />');

    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} className={classes.avatar} />
            <h2 className={classes.name}>{name || login}</h2>
            {formattedBio && (
                <p className={classes.bio} dangerouslySetInnerHTML={{ __html: formattedBio }} />
            )}
            {location && (
                <p className={classes.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            {company && (
                <p className={classes.company}>
                    <MdBusiness />
                    <span>{company}</span>
                </p>
            )}
            {blog && (
                <p className={classes.blog}>
                    <MdWeb />
                    <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a>
                </p>
            )}
            {email && (
                <p className={classes.email}>
                    <MdEmail />
                    <span>{email}</span>
                </p>
            )}
            {twitter_username && (
                <p className={classes.twitter}>
                    <FaTwitter />
                    <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">
                        @{twitter_username}
                    </a>
                </p>
            )}
            <p className={classes.createdAt}>
                <MdCalendarToday />
                <span>Membro desde {new Date(created_at).toLocaleDateString()}</span>
            </p>
            <div className={classes.stats}>
                <div>
                    <p>Seguidores</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Seguindo</p>
                    <p>{following}</p>
                </div>
                <div>
                    <p>Repositórios</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Gists</p>
                    <p>{public_gists}</p>
                </div>
            </div>
            <a href={`${html_url}?tab=repositories`} target="_blank" className={classes.profileLink}>
                Visitar Perfil
            </a>
        </div>
    );
}

export default User;
