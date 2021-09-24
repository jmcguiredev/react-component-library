// Generated with util/create-component.js
interface LinkObject {
    title: string,
    link: string
}

export interface HeaderProps {
    links: Array<LinkObject>;
    position?: 'left' | 'right' | 'center';
    theme?: string;
    fontSize?: number;
    underlineAnimationStart?: 'left' | 'right' | 'center';
}
