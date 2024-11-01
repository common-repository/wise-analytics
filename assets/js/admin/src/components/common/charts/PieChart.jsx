import React from "react";
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie'

class PieChart extends React.Component {

    render() {
        return <ResponsivePie
            data={ this.props.data}
            sortByValue={true}
            margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
            innerRadius={0}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'pastel2' }}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsDiagonalLength={4}
            arcLinkLabelsStraightLength={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            tooltip={({datum}) => (
                <div
                    style={{
                        padding: 12,
                        display: 'flex',
                        background: '#ffffff',
                        borderRadius: 5,
                        border: '1px solid #92b7d5',
                        alignItems: 'center'
                    }}
                ><strong>{ datum.label }</strong>: { datum.value } { this.props.valueLabel(datum.value) }</div>
            )}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
        />
    }
}

PieChart.propTypes = {
    data: PropTypes.array.isRequired,
    valueLabel: PropTypes.func.isRequired
};

export default PieChart;