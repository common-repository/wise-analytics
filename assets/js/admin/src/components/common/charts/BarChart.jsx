import React from "react";
import PropTypes from 'prop-types';
import { ResponsiveBar } from '@nivo/bar';
import { getNumberTickValues } from 'utils/charts';

class BarChart extends React.Component {

	render() {
		const yMax = Math.max( ...this.props.data.data.map(  record => record.y ).flat() );
		const yTickValues = getNumberTickValues(yMax, true);

		if (this.props.layout === 'horizontal') {
			return <ResponsiveBar
				data={this.props.data.data}
				keys={['y']}
				indexBy="x"
				margin={{top: 10, right: 30, bottom: 30, left: 50}}
				padding={0.3}
				valueScale={{type: 'linear'}}
				indexScale={{type: 'band', round: true}}
				colors={{scheme: 'category10'}}
				layout="horizontal"
				yScale={{
					type: 'linear',
					min: 0,
					max: yTickValues[yTickValues.length - 1],
					stacked: false,
					reverse: false
				}}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					tickValues: yTickValues,
					format: this.props.axisLeftFormat
				}}
				gridXValues={yTickValues}
				borderColor={{
					from: 'color',
					modifiers: [
						[
							'darker',
							1.6
						]
					]
				}}
				enableLabel={false}
				axisTop={null}
				axisRight={null}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: this.props.data.id,
					legendPosition: 'middle',
					legendOffset: -36,
					truncateTickAt: 0
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{
					from: 'color',
					modifiers: [
						[
							'darker',
							1.6
						]
					]
				}}
				tooltip={({id, value, color}) => <div style={{
					padding: 12,
					display: 'flex',
					background: '#ffffff',
					borderRadius: 5,
					border: '1px solid #92b7d5',
					alignItems: 'center'
				}}>
					{value} {value !== 1 ? this.props.data.plural : this.props.data.single}
				</div>}
			/>
		} else {
			return <ResponsiveBar
				data={this.props.data.data}
				keys={['y']}
				indexBy="x"
				margin={{top: 10, right: 30, bottom: 80, left: 30}}
				padding={0.3}
				valueScale={{type: 'linear'}}
				indexScale={{type: 'band', round: true}}
				colors={{scheme: 'category10'}}
				yScale={{
					type: 'linear',
					min: 0,
					max: yTickValues[yTickValues.length - 1],
					stacked: false,
					reverse: false
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					tickValues: yTickValues,
					format: this.props.axisLeftFormat
				}}
				gridYValues={yTickValues}
				borderColor={{
					from: 'color',
					modifiers: [
						[
							'darker',
							1.6
						]
					]
				}}
				enableLabel={false}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: this.props.data.id,
					legendPosition: 'middle',
					legendOffset: 40,
					truncateTickAt: 0
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{
					from: 'color',
					modifiers: [
						[
							'darker',
							1.6
						]
					]
				}}
				tooltip={({id, value, color}) => <div style={{
					padding: 12,
					display: 'flex',
					background: '#ffffff',
					borderRadius: 5,
					border: '1px solid #92b7d5',
					alignItems: 'center'
				}}>
					{value} {value !== 1 ? this.props.data.plural : this.props.data.single}
				</div>}
			/>
		}
	}

}

BarChart.defaultProps = {
	axisLeftFormat: y => y,
	layout: 'vertical'
}

BarChart.propTypes = {
	layout: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
	axisLeftFormat: PropTypes.func.isRequired
};

export default BarChart;