"use client";

import { TodosProps } from "@/lib/types";
import React from "react";

const TodosTable = ({ todos }: { todos: TodosProps[] }) => {
  return (
    <table className="w-full ">
      <thead>
        <tr>
          <th className=" pl-[20%]">Todos</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.todo}</td>
              <td
                className={`${
                  todo.completed ? "text-[#00FF9F]" : "text-[#E63946]"
                }`}
              >
                {todo.completed ? "Completed" : "Not Completed"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodosTable;
