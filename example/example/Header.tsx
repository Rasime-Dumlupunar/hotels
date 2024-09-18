//import { useQuery } from "@tanstack/react-query";
//import { getQuotes } from "./Updated";

//const Header = () => {
// updated bileşeninde API isteğinden elde ettiğimiz veri header'da da bize gerekti.
// bizde header'da da aynı API isteğini attık
// normal bir projede bu bir sorun olsa da tanstack qwery'nin cache mekanızması sayesinde iki kere API isteği atmak yerine 1 kere atıp ilk istekten gelen verileri ikinci de kullanıyor
// const { data } = useQuery({
//   queryKey: ["quotes"],
//   queryFn: getQuotes,
// });

// return (
//   <div>
//     <h2>Özlü Sözler</h2>
//      {/* @ts-ignore */}
//      <h2> {data?.data?.quotes?.length} tane özlü söz var</h2>
//    </div>
//  );
//};

//export default Header;
