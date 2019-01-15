import * as React from 'react';

export interface INewProps {
    test: string
}
 
export interface INewState {
    test:string
}
 
class New extends React.Component<INewProps, INewState> {
    constructor(props: INewProps) {
        super(props);
        this.state = { test: 'test'  };
    }
    public render() { 
        return ( 
            <div>
                {this.state.test}
            </div>
         );
    }
}
 
export default New;