import React from "react";
import PropTypes from 'prop-types';
import Loader from "common/Loader";
import TooltipIcon from "../TooltipIcon";
import {Link} from "react-router-dom";

class StatsTable extends React.Component {

	constructor(props) {
		super(props);

		this.renderPaginationSummary = this.renderPaginationSummary.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.hasNext = this.hasNext.bind(this);
		this.hasPrev = this.hasPrev.bind(this);
		this.handleFirst = this.handleFirst.bind(this);
	}

	renderPaginationSummary() {
		if (!this.props.total) {
			return null;
		}

		let upperLimit = this.props.offset + this.props.limit;
		if (upperLimit > this.props.total) {
			upperLimit = this.props.total;
		}

		return <div>
			{ this.props.offset + 1} - { upperLimit } / { this.props.total }
		</div>
	}

	handleFirst(e) {
		e.preventDefault();

		this.props.onOffsetChange(0);
	}

	handlePrev(e) {
		e.preventDefault();
		if (!this.hasPrev()) {
			return;
		}

		this.props.onOffsetChange(this.props.offset - this.props.limit);
	}

	handleNext(e) {
		e.preventDefault();
		if (!this.hasNext()) {
			return;
		}

		this.props.onOffsetChange(this.props.offset + this.props.limit);
	}

	hasNext() {
		const newOffset = this.props.offset + this.props.limit;

		return newOffset <= this.props.total;
	}

	hasPrev() {
		const newOffset = this.props.offset - this.props.limit;

		return newOffset >= 0;
	}

	render() {
		return <div className={ "card " + this.props.className }>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<h6 className="card-title">{ this.props.title } <Loader show={ this.props.loading } /></h6>
					<div className="d-flex align-items-center">
						<nav className="me-2" aria-label="Page navigation example">
							<ul className="pagination pagination-sm justify-content-center m-0">
								{this.props.offset > 0 &&
									<li className={"page-item m-0"}>
										<a className="page-link" href="#" tabIndex="-1" aria-disabled="true" onClick={this.handleFirst}>First</a>
									</li>
								}
								{ this.props.total > this.props.limit &&
									<li className={ "page-item m-0" + (!this.hasPrev() ? ' disabled' : '') }>
										<a className="page-link" href="#" tabIndex="-1" aria-disabled="true" onClick={ this.handlePrev }>Prev</a>
									</li>
								}
								{ this.props.total > this.props.limit &&
									<li className={ "page-item m-0" + (!this.hasNext() ? ' disabled' : '') }>
										<a className="page-link" href="#" onClick={ this.handleNext }>Next</a>
									</li>
								}
							</ul>
						</nav>
						{ this.renderPaginationSummary() }
					</div>
				</div>
				{ this.props.filters.length > 0 && <div className="row">
						{ this.props.filters.map( filter => <div className='col-auto'>{ filter }</div>	)}
					</div>
				}

				<table className="table table-striped">
					<thead>
						<tr>
							{ this.props.columns.map( column =>
								<th scope="col">{ column.name }</th>
							)}
						</tr>
					</thead>
					<tbody>
					{ this.props.data.map( (row, index) =>
						<React.Fragment key={ index }>
							{ this.props.rowRenderer ? (
								<tr>
									{ this.props.rowRenderer(row, index).map( (cell, indexCell) => <td key={ indexCell }>{ cell.value }</td> ) }
								</tr>
								) : (
								<tr>
									{ this.props.columns.map((column, columnIndex) =>
										<td key={ columnIndex }>{this.props.cellRenderer(columnIndex, row)}</td>
									)}
								</tr>
							)}

							{this.props.rowDivider ? this.props.rowDivider(row, index, this.props.data) : null}
						</React.Fragment>
					)}
					</tbody>
				</table>

				{ this.props.fullReportURL && <Link to={ this.props.fullReportURL } className="btn btn-sm btn-light">Full Report</Link> }
			</div>
		</div>
	}
}

StatsTable.defaultProps = {
	loading: false,
	onOffsetChange: () => null,
	className: '',
	filters: []
}

StatsTable.propTypes = {
	title: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired,
	className: PropTypes.string,
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
	cellRenderer: PropTypes.func,
	rowRenderer: PropTypes.func,
	total: PropTypes.number,
	offset: PropTypes.number,
	limit: PropTypes.number,
	onOffsetChange: PropTypes.func.isRequired,
	filters: PropTypes.array.isRequired,
	rowDivider: PropTypes.func,
	fullReportURL: PropTypes.string
};

export default StatsTable;