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
                    // tslint:disable-next-line:jsx-no-lambda
                    (deck: IDeckProps, index: number) => ( <a onClick={() =>this.changeStack(index)} key={index}> {deck.name} </a>)               
                )
            }

            <Deck {...this.state.current} />
            </div>
         );
    }

    private changeStack = (index: number) => {
        
       
        
        this.setState((prevState: IStackState) =>  {
            
            const currentIndex = this.props.stack.findIndex(value => value.name === prevState.current.name)

            
            if( currentIndex !== index) {
                return {current: this.props.stack[index]}
            } else {
                return null
            }
        })


        return undefined
    }
}
 
export default Stack;