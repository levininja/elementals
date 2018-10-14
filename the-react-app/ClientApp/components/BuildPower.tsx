import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

export class BuildPower extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
    }

    public render() {
        return(
            <div>
                <h1>Build Your Power</h1>
            </div>
        );
    }

}
