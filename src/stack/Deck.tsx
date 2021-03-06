import * as React from 'react';
import Card, { ICardProps } from './Card';


export interface IDeckProps {
    cards: ICardProps[]
    name: string
}
 
export interface IDeckState {
    current: ICardProps
}
 
class Deck extends React.Component<IDeckProps, IDeckState> {
    constructor(props: IDeckProps) {
        super(props);
        this.state = { current: this.props.cards[0]  };
    }

    public shouldComponentUpdate(nextProps: IDeckProps, nextState: IDeckState): boolean {
        if( nextProps.name !== this.props.name ) {
            this.setState({current: nextProps.cards[0]})
            return true;
        } else if(nextState.current.question !== this.state.current.question) {
            return true;
        } else {
            return false;
        }

    }
    public render() { 
        return (
            <div>
                <Card {...this.state.current} />
                <button onClick={this.slide}>next</button>
            </div>
        );
    }

    private slide = () => {
        this.setState(prevState => {
            const index = this.props.cards.findIndex( (card: ICardProps) => card.question === prevState.current.question )
            if(index === this.props.cards.length - 1) {
                return {current: this.props.cards[0]}
            } else {
                return {current: this.props.cards[index + 1]}
            }
        })
    }
}
 
export default Deck;