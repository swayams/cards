import Radium from 'radium';
import * as React from 'react';
import styles from '../styles/app.style';


export interface ICardProps {
    question: string
    answer: string
}
 
export interface ICardState {
    flipToAnswer: boolean
}
 
class Card extends React.Component<ICardProps, ICardState> {
    constructor(props: ICardProps) {
        super(props);
        this.state = { flipToAnswer: false  };
    }
    public render() { 
        return ( 
            <div style={styles.base}>
                <a style={styles.content}>{this.props.question}</a>
            </div> 
        );
    }
}
 
export default Radium(Card);