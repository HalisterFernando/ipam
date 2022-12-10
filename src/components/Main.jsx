import React from 'react';

export default function Main() {
  return (
    <>
      <select name="states" id="">
        <option value="selecione um estado" selected disabled>Selecione um estado</option>
        <option value="SP">SP</option>
      </select>
      <select name="cities" id="">
        <option value="selecione um município" selected disabled>Selecione um municipio</option>
        <option value="Limeira">Limeira</option>
      </select>
    </>
  );
}
