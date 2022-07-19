import { AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useAxios } from '../../../utility/axios';
import * as S from './style'

type TodoType = {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  memo: string;
}

type getTodoResponse = {
  data: TodoType[]
}

const Top: React.FC = () => {
  const axios = useAxios();
  const [ memo, setMemo ] = useState<string>("");
  const [ updateMemo, setUpdateMemo ] = useState<string>("");
  const [ todos, setTodos ] = useState<TodoType[]>([]);
  const [ isUpdate, setIsUpdate ] = useState<boolean>(false);
  const [ selectIndex, setSelectIndex ] = useState<number>(-1);

  const createTodo = useCallback(() => {
    axios.post('/memo', {memo: memo}).then((response: AxiosResponse<getTodoResponse>) => {
      const res: TodoType[] = response.data.data;
      setTodos([...todos, res[0]]);
    })
    setMemo("");
  },[todos, memo])

  const deleteTodo = useCallback((index: number) => {
    axios.post('/', {id: todos[index].id}).then((response: AxiosResponse<getTodoResponse>) => {
      if (response.status !== 200) {
        alert('削除に失敗しました');
        return
      }
      const newTodos = todos.filter(todo => todo.id !== todos[index].id)
      setTodos(newTodos);
    })
  }, [todos, memo])

  const updateTodo = useCallback(() => {
    axios.post('/update', {id: todos[selectIndex]['id'], memo: updateMemo}).then((response: AxiosResponse<getTodoResponse>) => {
      if (response.status !== 200) {
        alert('更新に失敗しました');
        return
      }
      todos[selectIndex].memo = updateMemo;
      setTodos(todos);
      setIsUpdate(false);
    })
  },[todos, memo, selectIndex, updateMemo, isUpdate])

  const updateTodoIndex = useCallback((index: number) => {
    setIsUpdate(true);
    setSelectIndex(index);
    setUpdateMemo(todos[index].memo)
  }, [memo, todos, selectIndex, updateMemo, isUpdate])

  useEffect(() => {
    axios.get('/').then((response: AxiosResponse<getTodoResponse>) => {
      const res = response.data.data;
      const result = res.map((data: TodoType) => {
        return {
          id: data['id'],
          createdAt: data['createdAt'],
          updatedAt: data['updatedAt'],
          deletedAt: data['deletedAt'],
          memo: data['memo']
        }
      })
      setTodos(result);
    })
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  }, [memo])

  const updateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateMemo(e.target.value);
  }, [updateMemo])

  const listTodos = todos.map((todo, index) => (
    <>
      <li>{todo.memo}</li>
      <button onClick={() => deleteTodo(index)}>削除</button>
      <button onClick={() => updateTodoIndex(index)}>更新</button>
    </>
  ))
  return (
    <>
      <S.Container>
        <ol>{listTodos}</ol>
        { isUpdate ? (
            <>
              <p>{selectIndex + 1}を更新する</p>
              <input type="text" value={updateMemo} onChange={updateChange}></input>
              <button onClick={updateTodo}>更新する</button>
            </>
          ):(
            <>
              <input type="text" value={memo} onChange={handleChange}></input>
              <button onClick={createTodo}>作成</button>
            </>
          )}
      </S.Container>
    </>
  )
}

export default Top;