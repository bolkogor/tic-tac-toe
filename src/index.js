import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Square(props) {
        return (
            <button
                className="square"

                onClick={props.onClick}>
                {props.value}
            </button>
        );
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xTurn: true,
        }
    }


    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick = {() => this.handleClick(i)}

        />;
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if ((squares[i] ==='X' || squares[i] === 'O') || this.winCheck(squares))
            return ;
        squares[i] = this.state.xTurn ? 'X' : 'O';
        this.setState({squares:squares, xTurn:!this.state.xTurn})

    }
    winCheck (sq) {
        const squares = sq;
        if (squares[4]){
            if (
                (squares[0] === squares[4] && squares[0] === squares[8]) ||
                (squares[2] === squares[4] && squares[2] === squares[6]))
                return 1;
        }

        for (let i = 0; i<squares.length/3;i++){
            if ((squares[i]&& squares[i] === squares[i+3] && squares[i] === squares[i+6]) ||
                (squares[i*3]&& squares[i*3] ===squares[i*3+1] && squares[i*3] === squares[i*3+2] ))
                return 1;
        }
        return null;
    }


    render() {

        const status = this.winCheck(this.state.squares)? ((!this.state.xTurn ? 'X' : 'O') + ' wins'):
        ('Next player: ' + (this.state.xTurn ? 'X' : 'O'))

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
                <button className='new-game' onClick={() => this.setState({squares: Array(9).fill(null),
                    xTurn: true})}>NEW GAME</button>
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

