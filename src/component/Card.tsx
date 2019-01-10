import * as React from 'react';

export interface ICardProps {
    
    question: string
    answer: string

}
 
export interface ICardState {
    content: string
}
 
class Card extends React.Component<ICardProps, ICardState> {

    constructor(props: ICardProps) {
        super(props);
        this.state = { content: this.props.question  };
       
    }
    public render() { 

        
        return ( 
            <div onClick={this.toggle}>{this.state.content}</div>
         );
    }

    public shouldComponentUpdate  ( nextProps: ICardProps, nextState: ICardState) {
        // new props
        if(this.props.question !== nextProps.question && this.props.answer !== nextProps.answer ) { 
            this.setState({content: nextProps.question})    
            return true 
        }
        // existing props but upgrade
        else if (nextState.content !== this.state.content) {
            return true
        } else {
            return false
        }
    } 

    

    private toggle = () => {
        this.setState((prevState) =>  {
            if (prevState.content === this.props.question) {
                return {content: this.props.answer}
            } else {
                return {content: this.props.question}
            }
        })
    }
}
 
export default Card;