import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

    renderBands = () => this.props.bands.map(band => (
        <Band band={band} key={band.id} deleteBand={this.props.deleteBand} />
    ));

    render() {
        return (
            <ul>{this.renderBands()}</ul>
        )
    }
}

export default Bands;