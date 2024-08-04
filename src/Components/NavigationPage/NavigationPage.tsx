import Style from './NavigationPage.module.css';

interface MenuProps {children:React.ReactNode}
export const NavigationMenu = ({children}:MenuProps) => {
    return (
        <div className={Style.menu}>
            {children}
        </div>
    );
}

interface ContentProps {children:React.ReactNode, state:boolean}
export const NavigationContent = ({children, state}:ContentProps) => {
    return (
        <div className={`${Style.content} ${state ? Style.menuOpened : ""}`}>
            {children}
        </div>
    );
}

interface PageProps {children:React.ReactNode}
const NavigationPage = ({children}:PageProps) => {
    return (
        <div className={Style.page}>
            {children}
        </div>
    );
}

export default NavigationPage;