import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export const getQuotes = (page: number) => axios.get(`https://dummyjson.com/quotes?skip=${page * 30}`);
 
     const Updated = () => {
        const [page, setPage] = useState(0); // sayfa değişimi için state tutuldu.
        // useQuery yapılan API isteğinin bütün detaylarının state'ini tutar.
        const {data, error, isLoading, refetch} = useQuery ({        // HATA durumunda refetch methodunu kullanıp tekrar istek atmasını sağlayabiliriz. 
        queryKey:["quotes", page], // dizi olarak veriliyor, dizi içerisinde string olarak ifade ediliyor.-- ekledğimiz page ile birlikte her Sayfa Değiş butonuna basıldığında yeniden API'ye istek atılır.
        queryFn: () => getQuotes(page), // API isteğini yapacak olan fonksiyon- ister burada ister ayrı bir dosyada istersek ayrı bir yerde tanımlayabiliyoruz.
        retry: 3,
    });
 
    if (isLoading) return <h2> Yükleniyor...</h2>;
    {/* @ts-ignore --- typescripti devre dışı bırakmak için yazıyoruz*/}
    if (error) return <div>{error.message} <button onClick={refetch}> Tekrar Dene </button></div>;
  // refetch methodu aynı API isteğinin yeniden atılmasını sağlıyor bizim için
    return (
    <div>
        { /* sayfa değişimi için bir buton ve setpage yöntemi eklendi.*/}
        <button onClick={() => setPage(page + 1 )}>Sayfa Değiş</button> 
        { /* @ts-ignore --- typescripti devre dışı bırakmak için yazıyoruz*/}
        {data.data.quotes.map((item) => (
            <p>
                <span>{item.quote}</span>
                <br/>
                <b>{item.author}</b>
            </p> 
        ))}
    </div>
  )
}

export default Updated;
