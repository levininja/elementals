import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface StartState {
    currentCount: number;
}

export class Start extends React.Component<RouteComponentProps<{}>, StartState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <h1>Start</h1>
        </div>;
    }

}
