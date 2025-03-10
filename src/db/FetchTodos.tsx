"use client";
import Loading from "@/components/Loading";
import TodosTable from "@/components/TodosTable";
import { TodosProps } from "@/lib/types";
import React, { useEffect, useState } from "react";

const FetchTodos = () => {
  const [todos, setTodos] = useState<TodosProps[] | null>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://dummyjson.com/todos");
        const data = await res.json();
        setTodos(data.todos);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);
  return (
    <div className=" flex justify-center ">
      {isLoading ? <Loading /> : <TodosTable todos={todos} />}
    </div>
  );
};

export default FetchTodos;
