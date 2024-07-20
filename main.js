//
let dataForm = document.getElementById('dataForm');//this is the form
let data = document.getElementById('file');//this is the input

//this handles the file and prevent this form to refresh
dataForm.addEventListener('submit',(env)=>{
    env.preventDefault();
    let jsonFile =data.files[0] 
    readFileAsJson(jsonFile).then(d => console.log('the form is successfully cuptured')).then(error => console.log(error))
    data.value = ''
})
let Name = '';
let surname = '';
let gender = '';
let age = '';
//this function will map the data with our defined variables and push them to the form
  function readFileAsJson(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = function(event) {
        try {
          const {Form}= JSON.parse(event.target.result);
          resolve(Form);
        Name = Form.name
        surname = Form.surname
        gender =Form.gender 
        age =Form.age
        document.getElementById("name").value = Name;
        document.getElementById("surname").value = surname;
        document.getElementById("gender").value = gender;
        document.getElementById("age").value = age; 
        } catch (error) {
          reject(error);
          console.log(error);
        }
      };
  
      reader.onerror = function(event) {
        reject(event.target.error);
      };
  
      let finalProduct = reader.readAsText(file);
      console.log(finalProduct);
    });
  }

  //fetching data
  //passing mathods and properties of the XMLHttpRequest object
  let ftch = new XMLHttpRequest();
  
  //prepare the request
  ftch.open('get', 'myjson.json', true);
  //send the request
  ftch.send();
  //catching the response
  ftch.onload = function()
  {
    let meee = document.getElementById("file");
    
    //checking the readyState and the status of the request
    if(this.readyState == 4 && this.status == 200)
    {
        let myDataFromJson = JSON.parse(this.responseText);
        console.log(myDataFromJson.name);
        
        //filling the form
            //console.log(Name)
            document.getElementById("name").value = Name;
            document.getElementById("surname").value = surname;
            document.getElementById("gender").value = gender;
            document.getElementById("age").value = age; 
    }
  }