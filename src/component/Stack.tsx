import * as React from 'react';
import { IDeckProps } from './Deck';
import Deck from './Deck';

export interface IStackProps {
    stack: IDeckProps[]
}
 
export interface IStackState {
    current: IDeckProps
}
 
class Stack extends React.Component<IStackProps, IStackState> {
    
    constructor(props: IStackProps) {
        super(props);
        this.state = {current: this.props.stack[0]}
        
    }
    public render() { 
        return ( 
          <div>  
           {
                this.props.stack.map(
                    (deck: IDeckProps, index: number) => (<a key={index}> {deck.name} </a>)               
                )
            }

            <Deck {...this.state.current} />
            </div>
         );
    }
}
 
export default Stack;