import React from 'react';
import Me from './Me.js'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <html>
                <body>
                    <div>
                       <Me/>
                    </div>
                </body>
            </html>
        );
    }
}
