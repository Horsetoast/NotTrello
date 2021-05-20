import data from "../../data/data.json";
import { v4 as uuid } from "uuid";
import { cloneDeep } from "lodash";

const mockLoading = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, 1000);
  });
};

// Important to return a new deep copy 
// so we don't mutate referenced json data
const getBoard = async (id) => {
  await mockLoading();
  if (id != null) {
    const board = data.boards.find((board) => board.id === id);
    return cloneDeep(board);
  }

  return cloneDeep(data.boards);
};

const createBoard = (name) => {
  const newBoard = {
    name,
    id: uuid(),
    lists: [],
  };
  data.boards.push(newBoard);
  return cloneDeep(newBoard);
};

const createList = (boardId, name) => {
  const newList = {
    name,
    items: [],
    id: uuid(),
  };
  data.boards = data.boards.map((board) => {
    if (board.id === boardId) {
      if (!board.lists) {
        board.lists = []
      }
      board.lists.push(newList);
    }
    return board;
  });
  return cloneDeep(newList);
};

const createItem = (boardId, listId, name) => {
  const newItem = {
    name,
    id: uuid(),
  };
  data.boards = data.boards.map((board) => {
    if (board.id === boardId) {
      board.lists = (board.lists || []).map((list) => {
        if (list.id === listId) {
          if (!list.items) {
            list.items = [];
          }
          list.items.push(newItem);
        }
        return list;
      });
    }
    return board;
  });
  return cloneDeep(newItem);
};

export { getBoard, createBoard, createItem, createList };
