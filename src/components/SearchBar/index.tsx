import ReactSelect from "react-select";
import { makes } from "../../constants";
import { OptionType } from "../../types";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type ButtonProps = {
  styling: string;
};
const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/images/magnifying-glass.svg" width={40} height={40} alt="" />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState<string>("");

  const [params, setParams] = useSearchParams();

  //  her render sırasında tekrardan hesaplamanın
  // önüne geçmek için ilk hesaplamanın sonucunu ara bellekte tutarız
  // react her render sırasında bilgiyi oradan alıyor
  const options: OptionType[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [makes]
  );
  console.log("bileşen render oldu > tekrar hesaplama yapıldı");

  // eventlerde parametrenin type nı kendimiz tanımlayamayacağımız için (çok fazla veri )
  // reactta yerleşik olarak bulunan tipleri kullanırız.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // urle marka ve model param ekle
    setParams({
      make: make.toLocaleLowerCase(),
      model: model.toLocaleLowerCase(),
    });
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item text-black">
        <ReactSelect
          onChange={(e) => e && setMake(e.value)} // event geldiyse statei güncelle burada bunu yapmzsak state de ekstradan null olduğunu belirtebiliriz ama biz null olmasını istemiyoruz
          options={options}
          className="w-full text-black"
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img
          className="absolute ml-4"
          width={25}
          src="/images/model-icon.png"
          alt=""
        />
        <input
          onChange={(e) => setModel(e.target.value)}
          type="text"
          className="searchbar__input rounded text-black"
          placeholder="ör:Civic"
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
