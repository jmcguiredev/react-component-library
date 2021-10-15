export interface LinkProps {
    title: string;
    link: string;
    theme?: "light" | "dark";
    fontSize?: number;
    underlineAnimationStart?: "right" | "left" | "center";
    selected: string;
    handleClick: (e: any) => void;
    
}
