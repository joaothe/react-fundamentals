import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Componente quadrado que me retorna a div quadrado com o numero
const Square = (props) => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
)

/*Componente que retorna os 9 quadrados e cada quadrado chama o metodo renderSquare que
retorna o quadrado com o value que a pessoa passar quando chama o metodo */
class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares : squares});
  }

  renderSquare(i) {
    return (
      <Square
      value={this.state.squares[i]}
      onClick = {() => this.handleClick(i)}
     />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
