function account() {
      const tariffhvs = 26.29;
      const tariffvo = 18.98;
      let cold_past  = document.getElementById('cold_past').value;
      let cold_present  = document.getElementById('cold_present').value;
      let cold_difference = cold_present - cold_past;
      document.getElementById('cold_difference').innerHTML = "Разность по холодной воде равна: " + cold_difference;
      let cold_payment = ((tariffhvs*cold_difference)+(tariffvo*cold_difference)).toFixed(2);
      document.getElementById('cold_payment').innerHTML = "К оплате за холодную воду: " + cold_payment + " р.";

      const tariffhot = 1397.35;
      const normhot = 0.0467;
      let hot_past  = document.getElementById('hot_past').value;
      let hot_present  = document.getElementById('hot_present').value;
      let hot_difference = hot_present - hot_past;
      document.getElementById('hot_difference').innerHTML = "Разность по горячей воде равна: " + hot_difference;
      let hot_payment = ((normhot * hot_difference)*tariffhot).toFixed(2);
      document.getElementById('hot_payment').innerHTML = "К оплате за горячую воду: " + hot_payment + " р.";

      const tariffelectricity = 3.47;
      let electricity_past  = document.getElementById('electricity_past').value;
      let electricity_present  = document.getElementById('electricity_present').value;
      let electricity_difference = (electricity_present - electricity_past).toFixed(2);
      document.getElementById('electricity_difference').innerHTML = "Разность по электроэнергии: " + electricity_difference;
      let electricity_payment = (electricity_difference*tariffelectricity).toFixed(2)
      document.getElementById('electricity_payment').innerHTML = "К оплате за электроэнергию: " + electricity_payment + " р.";
}
