
    const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
    let yearsOfAll = years.map((year)=>{
      return 2020-year;
      });
        console.log(yearsOfAll);
      
      function isDrive(year) {
    
        console.log((2020 - year) >= 17) ? `Born in ${year} candrive` : `Born in ${year} can drive in ${year + 17} year`);
      }
      // console.log(isDrive(2000));
      // console.log(isDrive(2010));
      console.log(yearsOld(years));
          