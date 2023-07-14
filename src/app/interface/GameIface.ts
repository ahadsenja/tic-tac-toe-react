export interface BoardIface {
  xIsNext: boolean;
  squares: Array<any>;
  onPlay: (nextSquares: Array<any>) => void;
}

export interface SquareIface {
  value: string;
  onSquareClicked: () => void;
}