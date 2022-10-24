import { ChessBoard, BoardLocation } from "./chessboard";

export interface Piece {
  /**
   * Returns true if piece can make valid move
   * @param from location of piece to move
   * @param to new potential location of piece
   */
  validMove(currentBoard: ChessBoard, from: BoardLocation, to: BoardLocation): boolean;
}
