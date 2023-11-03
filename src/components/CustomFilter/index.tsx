import Select from "react-select";
import { OptionType } from "../../types";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type CustomFilterType = {
  title: string;
  options: OptionType[];
};
const CustomFilter = ({ title, options }: CustomFilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    // urlde eklenecek parametreyi belirleme
    const key = title === "Yakıt Tipi" ? "fuel" : "year";
    // eğerki bir değer seçildiyse onu url'e ekle
    if (selected?.value) {
      params.set(key, selected.value.toLowerCase());

      // urli güncelle
      setParams(params);
    } else {
      params.delete(key);
    }
  }, [selected]);
  return (
    <div className="w-fit">
      <Select
        onChange={(e) => setSelected(e)}
        placeholder={title}
        options={options}
        className="min-w-[100px] text-black"
      />
    </div>
  );
};

export default CustomFilter;
