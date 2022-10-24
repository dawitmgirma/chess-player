const BoardCols = ["A", "B", "C", "D", "E", "F", "G", "H"] as const;
const BoardRows = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;
type BoardCols = typeof BoardCols[number];
type BoardRows = typeof BoardRows[number];

export type BoardLocation = `${BoardCols}${BoardRows}`;

/**
 * Immutable object representing a chess board. Initialized to beginning
 * state of chess board. 
 */
export class ChessBoard {
  /**
   * Makes move and creates a new Board with updated move if valid
   * @param from location of the piece to move
   * @param to location that the piece should move to
   */
  makeMove(from: BoardLocation, to: BoardLocation): ChessBoard {
    throw new Error("not implemented");
  }

  /**
   * Compares two ChessBoard objects and returns true if they are equal
   * @param other Chessboard to compare with
   */
  equalsTo(other: ChessBoard): boolean {
    throw new Error("not implemented");
  }

  /**
   * Returns a string format of the ChessBoard, where pieces are replaced
   * with char representation in 8x8 grid
   */
  toString(): string {
    throw new Error("not implemented");
  }
}
