import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Other = () => {
/*
* useQuery bileşen ekrana basıldığı anda otomatik API isteğini atıyor.
* useMutation da ise API isteğinin ne zaman atılacağını biz belirliyoruz.
*/
const {data, error, isPending, mutate} =  useMutation({
    mutationKey:["randomTodo"],
    mutationFn: () => axios.get("https://dummyjson.com/todos/random"),

});

console.log(data, error, isPending);
  return (
    <div>
        {/*@ts-ignore*/}
      <button onClick={mutate}> Rastgele Söz Al</button>
      {!data 
      ? "todo yok" 
      : isPending 
      ? "yükleniyor" 
      : error 
      ? "hata var" 
      : data && (
        <p>
            <span>{data?.data.id} </span>
            <span>{data?.data.todo}</span>
        </p>
      )}

    </div>
  );
};

export default Other;
