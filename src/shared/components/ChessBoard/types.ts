import { ShortMove } from 'chess.js';

export type ChessBoardProps = {
  handleMove: (move: ShortMove) => void;
  fen: string;
};
