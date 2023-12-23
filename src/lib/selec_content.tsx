import { City, State ,  } from 'country-state-city';
import  { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const SelectContent = () => {
  const walayis_Algeria = State.getStatesOfCountry('DZ');
  const [cityOfSelectedWilaya, setCityOfSelectedWilaya] = useState<string[]>([]);
  const [walayisOfAlgeria, setWalayisOfAlgeria] = useState<string[]>([]);
  const selected_walay = useSelector((state:RootState) => state.selectedOption.selected_walay);
  const isoCode_Wilaya = walayis_Algeria.find((item) => selected_walay === item.name);
  const countryCode = 'DZ';

useEffect(() => {
  walayis_Algeria.forEach((walay) => {
    setWalayisOfAlgeria((prevWalayis) => [...prevWalayis, walay.name]);
  });
  
  City.getCitiesOfState(countryCode, isoCode_Wilaya?.isoCode).forEach((city) => {
    setCityOfSelectedWilaya((prevCities) => [...prevCities, city.name]);
  });
  
}, [selected_walay])


  return { walayisOfAlgeria, cityOfSelectedWilaya };
};

export default SelectContent;
