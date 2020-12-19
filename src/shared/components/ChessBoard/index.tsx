import { Presentational } from './Presentational';
import { ChessInstance, ShortMove } from 'chess.js';
import { useState } from 'react';
const Chess = require('chess.js');

export const ChessBoard = () => {
  const [chess] = useState<ChessInstance>(
    new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'),
  );

  const [fen, setFen] = useState(chess.fen());

  const handleMove = (move: ShortMove) => {
    if (chess.move(move)) {
      setTimeout(() => {
        const moves = chess.moves();

        if (moves.length > 0) {
          const computerMove = moves[Math.floor(Math.random() * moves.length)];
          chess.move(computerMove);
          setFen(chess.fen());
        }
      }, 300);

      setFen(chess.fen());
    }
  };

  return (
    <>
      <Presentational handleMove={handleMove} fen={fen} />
    </>
  );
};
