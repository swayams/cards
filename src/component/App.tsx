
import * as React from 'react';
import stack from '../config/Stack'

import Stack from './Stack';

export class App extends React.Component<{}, {}> {
    public render() {
       
        return (
            <div>                
                <Stack {...stack} />
            </div>
        )
    }
} 
export default App;