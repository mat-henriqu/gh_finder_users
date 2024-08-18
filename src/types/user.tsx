export type UserProps = {
    login: string;
    avatar_url: string;
    name: string | null;
    bio: string | null;
    followers: number;
    following: number;
    location: string | null;
    public_repos: number;
    public_gists: number;
    company: string | null;
    blog: string | null;
    email: string | null;
    twitter_username: string | null;
    created_at: string;
    html_url: string;
};
