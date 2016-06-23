



















class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] }; 
	}

deleteBoard(id) {
		$.ajax({
			url: `/boards/${id}`,
			type: 'DELETE',
			dataType: 'JSON'
		}).done( data => {
			let boards = this.state.boards;
			let index = boards.findIndex( b => b.id === id);
			this.setState({
				boards: [
				  ...boards.slice(0, index),
				  ...boards.slice(index + 1, boards.length)
				]
			});
		}).fail( data => {
			// TODO: handle this better!
			alert('Board did not delete.');
		});
	}
	render() {
		let items = this.state.items.map( item => {
			// TODO: This should be a new Item component
			return(<h3>{item.name}</h3>)
		});
		return(
			<div>
			  <h3>{this.props.name}</h3>
			  <button className='btn red' onClick={() => this.props.deleteList(this.props.id)}>Delete</button>
			  <hr />
			  {items}
			</div>
		);
	}
}