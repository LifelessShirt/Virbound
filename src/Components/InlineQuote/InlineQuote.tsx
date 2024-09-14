import Styles from './InlineQuote.module.css';

export interface InlineQuoteProps {children:React.ReactNode}

export const IQ = ({children}:InlineQuoteProps) => {
    return (
        <div className={Styles.quote}>
            {children}
        </div>
    );
}