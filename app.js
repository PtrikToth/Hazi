/*
 * File: app.js
 * Author: Tóth Patrik André
 * Copyright: 2022, Toth Patrik Andre
 * Group: Szoft I/2
 * Date: 2022-04
 * Github: https://github.com/PtrikToth
 * Licenc: GNU GPL
 */

$("#formBMR").validate();
const testZsirElem = document.querySelector("#testZsir");
const testTomegElem = document.querySelector("#testTomeg");
const kaloriaElem = document.querySelector("#kaloria");
const kaloriaGomb = document.querySelector("#szamitKaloria");

kaloriaGomb.addEventListener("click", () => {
  let testzsirszazalek = Number(testZsirElem.value);
  let testtomeg = Number(testTomegElem.value);
  let osszKaloria = kaloriaCalc(testzsirszazalek, testtomeg);
  kaloriaElem.value = osszKaloria;
});

const kaloriaCalc = (zsir, suly) => 370 + 21.6 + Math.abs(1 - zsir) * suly;
