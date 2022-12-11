import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountyData, allStatesAndCounties } from '../redux/features/apiSlice';
import { selectedStateAndCounty } from '../redux/features/statesCountySlice';

export default function CountyData() {
  const { counties, countyData } = useSelector(allStatesAndCounties);
  const { county } = useSelector(selectedStateAndCounty);
  const { id: countyId } = counties.find(({ nome }) => nome === county);
  console.log(countyData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (countyId) {
      dispatch(fetchCountyData(countyId));
    }
  }, [countyId]);

  return (
    <div>CountyData</div>
  );
}
