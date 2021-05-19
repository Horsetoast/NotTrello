import data from "../../data/data.json";
import { v4 as uuid } from 'uuid';

const mockLoading = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, 1000);
  });
};

const getBoard = async (id) => {
  await mockLoading();
  if (id != null) {
    return data.boards.find((board) => board.id === id);
  }
  return data.boards;
};

const createBoard = (name) => {
  const newBoard = {
    name,
    id: uuid(),
    lists: [],
  };
  return newBoard;
};

export { getBoard, createBoard };
