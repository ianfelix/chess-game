import Chessboard from 'chessboardjsx';
import './styles.css';

export const Presentational = () => {
  return (
    <div className='container'>
      <h1>Random Chess</h1>
      <Chessboard
        width={500}
        position='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
      />
    </div>
  );
};
