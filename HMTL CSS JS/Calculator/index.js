let str = "";
      const boxes = document.getElementsByClassName("box")

      function setValue(newstr) {
        if( newstr === 'M')
        newstr = "%"
        else if( newstr === 'x')
        newstr = "*"
          str = str + newstr;
          document.querySelector("#display").innerHTML = str;
      }
      function cancel()
      {
        str = str.substring(0, str.length - 1)
          document.querySelector("#display").innerHTML = str;
      }

      function performed(){
      try {
              str = eval(str).toFixed(2);
          }
          catch (err) {
              alert("Entered invalid Operation")
          }
          document.querySelector("#display").innerHTML = str;

        }
      for (let i = 0; i < boxes.length; i++) {
          boxes[i].onclick = (e) => {
              let newstr = boxes[i].querySelector("strong").innerHTML;
              setValue(newstr)
          }
      }
      document.addEventListener("keydown", e => {
          switch (e.key)
          {
              case "1":
          setValue("1");
          break;
              case "2":
          setValue("2");
          break; case "3":
          setValue("3");
          break; case "4":
          setValue("4");
          break; case "5":
          setValue("5");
          break; case "6":
          setValue("6");
          break; case "7":
          setValue("7");
          break; case "8":
          setValue("8");
          break; case "9":
          setValue("9");
          break;
          case ".":
          setValue(".");
          break;
          case "0":
          setValue("0");
          break; case "%":
          setValue("%");
          break; case "/":
          setValue("/");
          break; case "*":
          setValue("*");
          break; case "-":
          setValue("-")
          break; case "+":
          setValue("+");
          break;
          case "Enter":
          performed();
          break;
          case "Backspace":
          cancel()
          break;
          case "Delete":
          cancel()
          break;
         
      }
      })
      document.querySelector(".submit").onclick = () => {
        performed();
      }
      document.querySelector(".cancel").onclick = () => {
        cancel()
      }
      document.querySelector(".clear").onclick = () => {
          str = ''
          document.querySelector("#display").innerHTML = str;
      }
      document.querySelector(".reload").onclick = () => {
          window.location.reload();
      }