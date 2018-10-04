import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  constructor() { }

  personObjectList=[];
  ngOnInit() 
  {
  }

  givenName:string="";
  givenCity:string="";
  givenCountry:string="";
  givenPhoneNumber:number=null;



inpname:string="";
inpnumber:number;
inpcity:string="";
inpcountry:string="";


givenNameTemp="";
givenCityTemp="";
givenCountryTemp="";
givenPhoneNumberTemp=null;


personObject=[
  /*this.givenNameTemp=this.givenName,
  this.givenCityTemp=this.givenCity,
  this.givenCountryTemp=this.givenCountry,
  this.givenPhoneNumberTemp=this.givenCountry*/
]


submitData(name,city,country,phoneNumber) 
{
  
 
  
  
  //console.log(name);
  //console.log(city);
  //console.log(country);
  //console.log(phoneNumber);
  
  
  /*
  
  this.personObject=
  [(
    this.givenName=name,
    this.givenCity=city,
    this.givenCountry=country,
    this.givenPhoneNumber=phoneNumber
  )]

*/


  /*
this.personObject=
  [


      name,
      city,
      country,
    phoneNumber
]
  */
  
  this.personObjectList.push({ givenName: name, givenCity: city,givenCountry: country,givenPhoneNumber:phoneNumber });



  //this.personObjectList.push(this.personObject);
  //console.log(this.personObject);
 // alert(this.personObject);
  //alert(this.personObjectList);
  //alert(this.personObjectList.personObject.name);



  this.givenName="";
  this.givenCity="";
  this.givenCountry="";
  this.givenPhoneNumber=null;


  

  

  





}







index:number=null;


submitDataEdit(name,city,country,phoneNumber) 
{
  
 
  
 
  
  //this.personObjectList[this.index].push({ givenName: name, givenCity: city,givenCountry: country,givenPhoneNumber:phoneNumber });


  this.personObjectList[this.index].givenName=name;
  this.personObjectList[this.index].givenCity=city;
  this.personObjectList[this.index].givenCountry=country;
  this.personObjectList[this.index].givenPhoneNumber=phoneNumber;
 


  this.givenName="";
  this.givenCity="";
  this.givenCountry="";
  this.givenPhoneNumber=null;


}

















getindex(i)
  {
    this.index=i;
  }






deleteFunc()
{
  if(confirm("Want to delete?")) this.personObjectList.splice(this.index, 1);
}





//personObjectList.push(personObject);


}
