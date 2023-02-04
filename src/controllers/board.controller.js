import { BoardService } from "../services/board.service";
import { HttpStatusCode } from "~/utilities/constant";

const createNew = async (req, res) => {
  try {
    const result = await BoardService.createNew(req.body);
    res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({
      error: error.message,
    });
  }
};

export const BoardController = { createNew };
