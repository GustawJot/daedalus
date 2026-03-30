export type AvatarSize = 'sm' | 'default' | 'lg';
type Props = {
    id?: string;
    src?: string | null;
    alt?: string;
    fallback?: string;
    size?: AvatarSize;
    class?: string;
};
declare const Avatar: import("svelte").Component<Props, {}, "">;
type Avatar = ReturnType<typeof Avatar>;
export default Avatar;
