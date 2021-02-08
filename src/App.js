import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button";
import Card from "./components/Card";
import './Styles/Style.css';  

class App extends React.Component {
  constructor() {
    super (); 
    this.state = {
      // name : '',
      // capital: '',
      // flag : '',
      // population : '',
      // region : '',
      searchCountry : '',
      countryAll : []
    }
    this.onCountryChange = this.onCountryChange.bind(this);
  }

  componentDidMount() {
    // fetch ("https://restcountries.eu/rest/v2/name/france")
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response);
    //     this.setState({
    //       name : response[0].name,
    //       capital : response[0].capital,
    //       population : response[0].population,
    //       region : response[0].region,
    //       flag : response[0].flag
    //     })
    //   })
    this.getCountry('france');
  }

  
  getCountry (country) {
    fetch (`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(response => {
      // console.log(response);
      this.setState({
        // name : response[0].name,
        // capital : response[0].capital,
        // population : response[0].population,
        // region : response[0].region,
        // flag : response[0].flag,
        countryAll : response,
      })
    })
  }
  onCountryChange(event) {
    this.setState ({
      searchCountry : event.target.value
    })
  }
  render (){
    return (
      <div>
          <Button onClickButton={()=>{this.getCountry('france')}}>France</Button>  
          <Button onClickButton={()=>{this.getCountry('Croatia')}}>Croatia</Button>
          <Button onClickButton={()=>{this.getCountry('Brazil')}}>Brazil</Button>

          <input value={this.state.searchCountry}
                 onChange ={this.onCountryChange}></input>
          <button onClick={() => {this.getCountry(this.state.searchCountry)}}>Search Country</button>
          
          {/* below is to display if it is one country */}
          {/* <Card flag = {this.state.flag}
                name={this.state.name}
                capital = {this.state.capital}
                population = {this.state.population}
                region = {this.state.region}>
          </Card> */}
          {/* both above and below are same but above more clear and below less code and automatique */}
          {/* <Card {...this.state}></Card>  */}

          {/* if you have same country name in many table then use below method */}
          {this.state.countryAll.map((country) => {
            return <Card {...country}/>
          })}
          

      </div>
      
    )
  }
}

export default App;

// 
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data : "Yeshi",
  //   }
  // }
  // // getData () {
  //   setTimeout(()=> {
  //     console.log('Data fetched is Out');
  //     this.setState ({
  //       data : 'hello '
  //     })
  //   }, 1000)
  // }
  // componentDidMount(){
  //   this.getData();
  // }
  