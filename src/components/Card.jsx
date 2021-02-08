import React from 'react';

class Card extends React.Component {
 render() {
     return (
         <div>
            <img className="countryFlag" src={this.props.flag} alt={`Flag of the ${this.props.name}`}  />
            <p>Name : {this.props.name}</p>
            <p>Capital : {this.props.capital}</p>
            <p>Population : {this.props.population}</p>
            <p>Region : {this.props.region}</p>
         </div>
     )
 }
}
export default Card;