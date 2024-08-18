/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Search from "../components/Search";
import { UserProps } from "../types/user";
import User from "../components/User";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadUser = async (userName: string) => {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);

        if (response.status === 404) {
            setError("Usuário não encontrado!");
            setUser(null);
            return;
        }

        const data = await response.json();
        const {
            avatar_url, login, location, followers, following, html_url,
            name, bio, public_repos, public_gists, company, blog, email, twitter_username, created_at
        } = data;

        const userData: UserProps = {
          avatar_url, login, location, followers, following, html_url,
          name, bio, public_repos, public_gists, company, blog, email, twitter_username, created_at
        };

        setUser(userData);
        setError(null);
    } catch (error) {
        setError("Ocorreu um erro ao buscar o usuário.");
        setUser(null);
    }
};

  return (
    <div >
      <Search loadUser={loadUser} />
      {error && <p >{error}</p>}
      {user && <User {...user} />}
    </div>
  );
};

export default Home;
