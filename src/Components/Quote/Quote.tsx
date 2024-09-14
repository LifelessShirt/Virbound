import Styles from './Quote.module.css';

export interface QuoteProps {children:React.ReactNode}

const Quote = ({children}:QuoteProps) => {
    return (
        <div className={Styles.quote}>
            {children}
        </div>
    );
}

export default Quote;