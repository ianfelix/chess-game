import Chessboard from 'chessboardjsx';
import './styles.css';
import { ChessBoardProps } from './types';

export const Presentational = (props: ChessBoardProps) => {
  const { handleMove, fen } = props;

  return (
    <div className='container'>
      <h1 className='title'>Random Chess Game</h1>
      <Chessboard
        width={500}
        position={fen}
        onDrop={(move) =>
          handleMove({
            from: move.sourceSquare,
            to: move.targetSquare,
            promotion: 'q',
          })
        }
      />
    </div>
  );
};
