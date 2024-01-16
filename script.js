var townshipCodes = {
  "1":["HsaBaTa","HsaDaNa","RaBaYa","KaPaTa","PaWaNa","KaMaTa","MaLaNa","AhGaYa","BaMaNa","DaPhaYa","HaPaNa","KaMaNa","KhaBaDa","KhaLaPha","KhaPhaNa","LaGaNa","MaKaNa","MaKaTa","MaKhaBa","MaMaNa","NaMaNa","MaNyaNa","MaSaNa","PaNaDa","PaTaAh","SaLaNa","SaPaBa","TaNaNa","WaMaNa","YaKaNa"],
    "2":["BaLaKha","DaMaSa","LaKaNa","MaSaNa","PhaSaNa","PhaYaSa","YaTaNa","YaThaNa"],
    "3":["RaRaTha","LaThaNa","BaGaLa","KaMaMa","SaKaLa","WaLaMa","BaAhNa","BaThaSa","KaSaKa","KaDaNa","KaKaYa","LaBaNa","MaWaTa","PaKaNa","PhaPaNa","ThaTaKa","ThaTaNa"],
    "4":["HsaMaNa","HaKhaNa","HtaTaLa","KaKhaNa","KaPaLa","MaTaNa","MaTaPa","PaLaWa","PhaLaNa","TaTaNa","TaZaNa","YaKhaDa","YaZaNa"],
    "5":["KhaPaNa","DaHaNa","MaPaLa","HtaPaKha","HsaMaRa","AhTaNa","AhYaTa","BaMaNa","BaTaLa","DaPaYa","HaMaLa","HtaKhaNa","KaBaLa","KaLaHta","KaLaNa","KaLaTa","KaLaWa","KaNaNa","KaMaNa","KhaTaNa","KaThaNa","KhaOoNa","KhaOoTa","LaHaNa","LaYaNa","MaKaNa","MaLaNa","MaMaTa","MaThaNa","NaYaNa","NgaZaNa","PaLaNa","PaSaNa","SaKaNa","SaLaKa","TaSaNa","WaLaNa","YaBaNa","YaMaPa","MaMaNa","MaYaNa","PaLaBa","PhaPaNa","TaMaNa","WaThaNa","YaONa"],
    "6":["KaLaA","PaLaTa","PaKaMa","BaPaNa","HtaWaNa","KaThaNa","KaYaYa","LaLaNa","MaAhNa","MaAhYa","PaLaNa","TaThaYa","YaPhaNa","MaMaNa","KaSaNa","KhaMaKa","MaTaNa","ThaYaKha"],
    "7":["AhPhaNa","DaOoNa","HtaTaPa","KaPaKa","KaTaKha","LaPaTa","MaLaNa","NaTaLa","NyaLaPa","PaKhaNa","PaMaNa","PaTaNa","PhaMaNa","TaNgaNa","ThaNaPa","ThaWaTa","YaKaNa","YaTaNa","ZaKaNa","AhTaNa","KaKaNa","KaWaNa","MaNyaNa","PaKhaTa","PaTaTa","ThaKaNa","WaMaNa","YaTaYa"],
    "8":["MaHtaNa","AhLaNa","HtaLaNa","KaHtaNa","KhaMaNa","MaBaNa","MaLaNa","MaMaNa","MaTaNa","NaMaNa","NgaPhaNa","PaMaNa","PaPhaNa","SaMaNa","SaPaWa","SaTaYa","TaTaKa","YaNaKha","YaSaKa","GaGaNa","KaMaNa","MaKaNa","MaThaNa","PaKhaKa","SaLaNa","SaPhaNa","ThaYaNa"],
    "9":["NgaZaNa","AhMaZa","KaPaTa","KaSaNa","KhaMaSa","LaWaNa","MaHtaLa","MaKaNa","MaLaNa","MaMaNa","MaNaTa","MaTaYa","MaYaMa","MaYaTa","NgaThaYa","NyaONa","PaBaNa","PaMaNa","PaOLa","SaKaNa","SaKaTa","TaKaTa","TaTaOo","ThaPaKa","ThaSaNa","YaMaTha","OoTaTha","ZaYaTha","PaBaTha","DaKhaTha","ZaBaTha","AhMaYa","KhaAhZa","MaHaMa","MaKhaNa","MaNaMa","MaThaNa","NaHtaKa","PaKaKha","PaThaKa","TaKaNa","TaThaNa","WaTaNa"],
    "10":["KhaZaNa","BaLaNa","KaMaYa","KhaSaNa","LaMaNa","MaLaMa","PaMaNa","ThaPhaYa","YaMaNa","KaHtaNa","MaDaNa","ThaHtaNa"],
    "11":["TaPaWa","BaThaTa","GaMaNa","KaPhaNa","KaTaNa","MaAhNa","MaAhTa","MaPaTa","MaONa","MaPaNa","MaTaNa","PaNaKa","PaTaNa","SaTaNa","TaKaNa","ThaTaNa","YaBaNa","YaThaTa","AhMaNa","KaTaLa"],
    "12":["AhLaNa","AhSaNa","BaHaNa","BaTaHta","DaGaMa","DaGaNa","DaGaSa","DaGaTa","DaGaYa","DaLaNa","DaPaNa","HtaTaPa","KaKaKa","KaKhaKa","KaMaNa","KaMaTa","KaMaYa","KaTaNa","KaTaTa","KhaYaNa","LaKaNa","LaMaNa","LaMaTa","LaThaNa","LaThaYa","MaBaNa","MaGaDa","MaGaTa","MaYaKa","OKaMa","OKaTa","PaBaTa","PaZaTa","SaKaKha","SaKaNa","SaKhaNa","TaKaNa","TaMaNa","TaTaNa","TaTaTa","ThaGaKa","ThaKaTa","ThaKhaNa","ThaLaNa","YaKaNa","YaPaTha"],
    "13":["KaTaLa","NaTaRa","KhaLaNa","KaLaDa","PaHsaNa","MaKaHta","PaHsaTa","MaLaTa","PaLaHta","MaYaNa","MaHsaNa","MaHtaNa","AhTaNa","HaMaNa","HaPaNa","HaPaTa","KaHaNa","KaKaNa","KaKhaNa","KaLaHta","KaLaNa","KaLaTa","KaMaNa","KaTaKa","KaTaNa","KaTaTa","KaThaNa","KhaYaHa","LaKaNa","LaKaNa","LaKhaTa","LaLaNa","LaYaNa","MaBaNa","MaHaYa","MaKaNa","MaKaTa","MaKhaNa","MaKhaTa","MaLaNa","MaMaHta","MaMaNa","MaMaTa","MaNaNa","MaNaTa","MaNgaNa","MaPaHta","MaPaNa","MaPaTa","MaPhaNa","MaPhaTa","MaSaNa","MaSaTa","MaHtaTa","MaTaNa","MaTaTa","MaYaHta","MaRaTa","MaRaNa","MaYaTa","NaKhaNa","NaKhaTa","NaMaTa","NaPhaNa","NaHsaNa","NaSaNa","NaTaNa","NyaYaNa","PhaKhaNa","PaLaNa","PaLaTa","PaPaKa","PaTaYa","PaWaNa","PaYaNa","SaSaNa","TaKaNa","TaKhaLa","TaLaNa","TaMaNya","TaTaNa","TaYaNa","ThaNaNa","ThaPaNa","YaNgaNa","YaSaNa"],
    "14":["KaKaHta","AhGaPa","AhMaNh","AhMaTa","BaKaLa","DaDaYa","DaNaPha","HaKaKa","HaThaTa","KaKaTa","KaKaNa","KaKhaNa","KaLaNa","KaPaNa","LaMaNa","LaPaTa","MaAhNa","MaAhPa","MaMaKa","MaMaNa","NgaPaTa","NgaSaNa","NgaThaKha","NgaYaKa","NyaTaNa","PaSaLa","PaTaNa","PaThaNa","PaThaYa","PhaPaNa","ThaPaNa","WaKhaMa","YaKaNa","YaThaYa","ZaLaNa"] 
};

function updateTownshipCodes() {
  var numberSelector = document.getElementById("numberSelector");
  var townshipCodeSelector = document.getElementById("townshipCodeSelector");
  var selectedNumber = numberSelector.value;

  // Clear previous options
  townshipCodeSelector.innerHTML = '';

  if (townshipCodes[selectedNumber]) {
      townshipCodes[selectedNumber].forEach(function(code) {
          var option = document.createElement("option");
          option.value = code;
          option.text = code;
          townshipCodeSelector.appendChild(option);
      });
  } else {
      // Handle case when no number is selected or no codes are available
      var placeholderOption = document.createElement("option");
      placeholderOption.value = '';
      placeholderOption.text = 'Select a number first';
      townshipCodeSelector.appendChild(placeholderOption);
  }
  
  document.getElementById('emailForm').addEventListener('submit', function(event) {
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      if (!emailInput.checkValidity()) {
          event.preventDefault();
          emailError.textContent = 'Please enter a valid email address.';
          emailError.style.display = 'block';
      } else {
          emailError.textContent = '';
          emailError.style.display = 'none';
      }
  });
}

function combineStrings() {
  // Get selected values
  var numberSelector = document.getElementById("numberSelector").value;
  var townshipCodeSelector = document.getElementById("townshipCodeSelector").value;
  var nrcCitizenLetter = document.getElementById("nrc-citizen-letter").value;
  var nrcNumber = document.getElementById("nrcNumber").value;

  // Check if all values are selected
  if (numberSelector && townshipCodeSelector && nrcCitizenLetter && nrcNumber) {
      // Combine the values into a single string
      var resultString = numberSelector + "/" + townshipCodeSelector + "(" + nrcCitizenLetter + ")" + nrcNumber;

      // Display the result
      document.getElementById("result_string").textContent  = resultString;
  } else {
      alert("Please select all values.");
  }
}

function registrationSuccess() {
  alert("Successfully registered!");
  // You can redirect the user to another page or perform other actions after registration.
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  // Add your form submission logic here
  
  // For demonstration purposes, let's assume the registration is successful
  // You should replace the following line with your actual form submission code
  event.preventDefault(); // This line is for demonstration purposes only
  
  // Show the success message
  registrationSuccess();
});
document.getElementById("submitButton").addEventListener("click", function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Redirect to registerSuccessfully.php
  window.location.href = "registerSuccessfully.php";
});